"""
This script converts ISO 19115 XML metadata entries into bibtex entries.
"""

import json
import xmltodict
import os


def cleanMetadata(metadata):
    """ 
    Takes the ISO metadata as json and makes processing
    easier by removing unnecessary parts, like
    `gco:CharacterString` nodes.
    """
    if isinstance(metadata, dict):
        for prop in metadata.keys():
            if prop[0] == '-':
                metadata.pop(prop)
            elif isinstance(prop, str) and prop[:3] == 'gco':
                return metadata[prop]
            else:
                metadata[prop] = cleanMetadata(metadata[prop])
                if isinstance(metadata[prop], dict):
                    for subprop in metadata[prop].keys():
                        if (subprop[:3] == 'gco' or subprop == '#text'):
                            metadata[prop] = metadata[prop][subprop]
                if isinstance(metadata[prop], list):
                    for i in range(len(metadata[prop])):
                        metadata[prop][i] = cleanMetadata(metadata[prop][i])
    elif isinstance(metadata, list):
        for i in range(len(metadata)):
            metadata[i] = cleanMetadata(metadata[i])
    return metadata
    
    
def escape(string):
    return string.replace("{", "\\{").replace("}", "\\}") \
                 .replace("%", "\%")
    

def convert():
    with open("datasets.bib", 'w', encoding='utf-8') as out_file:
        for xml_file in os.listdir('datasets_xml'):
            print(xml_file)
            with open(os.path.join('datasets_xml', xml_file), 'r', encoding='utf8') as f:
                xml_string = f.read()
            
            json_entry = cleanMetadata(xmltodict.parse(xml_string))["gmd:MD_Metadata"]
            
            authors = json_entry["gmd:identificationInfo"]["gmd:MD_DataIdentification"]["gmd:citation"]["gmd:CI_Citation"]["gmd:citedResponsibleParty"]
            authors_str = ""
            for i in range(len(authors)):
                authors_str += authors[i]["gmd:CI_ResponsibleParty"]["gmd:individualName"]
                if i < len(authors) - 1:
                    authors_str += " and "
            
            title = json_entry["gmd:identificationInfo"]["gmd:MD_DataIdentification"]["gmd:citation"]["gmd:CI_Citation"]["gmd:title"]
            
            keywords = json_entry["gmd:identificationInfo"]["gmd:MD_DataIdentification"]["gmd:descriptiveKeywords"]
            keywords_str = ""
            for i in range(len(keywords)):
                keyword_list = keywords[i]["gmd:MD_Keywords"]["gmd:keyword"];
                if isinstance(keyword_list, dict):
                    for i, (k, v) in enumerate(keyword_list.items()):
                        keywords_str += v
                        if i < len(keyword_list) - 1:
                            keywords_str += ', '
                elif isinstance(keyword_list, list):
                    for v in keyword_list:
                        keywords_str += v
                        if i < len(keyword_list) - 1:
                            keywords_str += ', '
                else:
                    keywords_str += keyword_list
                    if i < len(keywords) - 1:
                        keywords_str += ', '

            abstract = json_entry["gmd:identificationInfo"]["gmd:MD_DataIdentification"]["gmd:purpose"] \
                + "\n    " + json_entry["gmd:identificationInfo"]["gmd:MD_DataIdentification"]["gmd:abstract"]
            abstract = abstract
            file_id = json_entry["gmd:fileIdentifier"]
            
            bib_entry = \
f"""@misc{{{file_id},
    authors = {{{escape(authors_str)}}},
    title = {{{escape(title)}}},
    keywords = {{{escape(keywords_str)}}},
    abstract = {{{escape(abstract)}}},
    howpublished = {{\\url{{https://gwf-uwaterloo.github.io/wamedex/}}}},
}}"""
             
            out_file.write(bib_entry)
            out_file.write("\n")
            
if __name__ == '__main__':
    convert()
