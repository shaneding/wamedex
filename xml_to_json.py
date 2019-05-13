import json
import xmltodict
import os
 

with open("datasets.js", 'w') as out_file:
    out_file.write('var datasets = [\n')
    
    for xml_file in os.listdir('datasets_xml'):
        print(xml_file)
        with open(os.path.join('datasets_xml', xml_file), 'r', encoding='utf8') as f:
            xml_string = f.read()
        
        json_string = json.dumps(xmltodict.parse(xml_string), indent=4)
         
        out_file.write(json_string)
        out_file.write(',')
    
    out_file.write('\n]')
