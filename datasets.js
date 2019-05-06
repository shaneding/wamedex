var datasets = [
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13056_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-04-03" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13056" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Global Navigation Satellite System Reflectometry data for southern Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-04-03" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Duguay, Claude " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Ghiasi, Yusof" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Salehian, Armaghan " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Duguay, C., Ghiasi, Y., and Salehian, A. (2019). Global Navigation Satellite System Reflectometry data for southern Ontario. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Soil moisture and snow depth data will be retrieved from a Global Navigation Satellite System Reflectometry (GNSS-R) instrument onboard a unmanned aerial vehicle (UAV). These data will be compared with ground measurements taken coincidentally with the flight." },
        "gmd:purpose": {
          "gco:CharacterString": "The Global Navigation Satellite System Reflectometry (GNSS-R) has shown potential for the retrieval of properties pertaining to soil moisture and snow depth. The Faculty of Engineering at the University of Waterloo has designed and built a reflectometer for these properties. This instrument will be tested, comparing the collected data with coincident field measurements in southern Ontario. <br/> This data set is collected for the project titled \"Transformative sensor Technologies and Smart Watershed (TTWS): Work Package 2\". TTWS a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund."
        },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "planned",
            "-codeSpace": "ISOTC211/19115",
            "#text": "planned"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Remote sensing data" },
                { "gco:CharacterString": "Satellite imagery" },
                { "gco:CharacterString": "Snow" },
                { "gco:CharacterString": "Snow depth" },
                { "gco:CharacterString": "Soil moisture" },
                { "gco:CharacterString": "Soils" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-04-03" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Southern Ontario" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-81.4075931" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-78.9483902" },
                "gmd:southBoundLatitude": { "gco:Decimal": "42.1641862" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.7380505" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2019-08-01",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Ghiasi, Yusof (University of Waterloo, syghiasi@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-04-03" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12998_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-25" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12998" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Agricultural Demand for Compensation to Adopt BMPs in Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-25" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Brouwer, Roy" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Liu, Haiyan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Brouwer, R., and Liu, H. (2019). Agricultural Demand for Compensation to Adopt BMPs in Ontario. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "An online survey designed within Qualtrics will be conducted in the entirety of Ontario. The survey will be distributed to all the farmers who are members of Ontario Soil and Crop Improvement Association (OSCIA). When designing the survey, we sought advice from various practitioners of agricultural policies, to ensure the survey questions are easily understood by farmers and the hypothetical scenarios are realistic. The survey will collect information on agricultural operations (e.g. farm size, main field-based agricultural crops, experience and perception with BMPs), choice experiment (BMP programs with hypothetical BMP type, duration, participation mode, technical support source, inspection type, and compensation level), environmental attitude (e.g. level of concern about drinking water pollution and climate change, and knowledge of local water quality), and socio-economics (e.g. age, gender, education and income). The data will be analyzed with proper economic and econometric models." },
        "gmd:purpose": { "gco:CharacterString": "The main goal of this research in Agricultural Water Futures is to investigate farmers’ current Best Management Practices (BMPs) adoption status and elicit their demand for monetary compensation to take certain measures. We pay particular attention to the factors and conditions that incentivize farmers’ adoption. The core part of the project is to design a discrete choice experiment which specifies a couple of hypothetical BMP options for pre-identified attributes. Choice experiment, as a stated preference method, along with other socio-demographic characteristics of the farmer and farm operation data, can recover estimates of farmers’ willingness-to-accept for taking up BMPs. <br/> This dataset is collected to support the objectives of  Agricultural Water Futures in Canada: Stressors and Solutions: Work Package 3\". Agricultural Water Futures  is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "planned",
            "-codeSpace": "ISOTC211/19115",
            "#text": "planned"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Adaptation" },
                { "gco:CharacterString": "Conservation" },
                { "gco:CharacterString": "Financial resources" },
                { "gco:CharacterString": "Management" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Soils" },
                { "gco:CharacterString": "Water quality" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-25" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-95.16" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-74.34" },
                "gmd:southBoundLatitude": { "gco:Decimal": "42.05" },
                "gmd:northBoundLatitude": { "gco:Decimal": "56.86" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2019-03-11",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Brouwer, Roy (rbrouwer@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-25" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12999_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-05" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12999" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Economic Costs of Eutrophication in The Laurentian Great Lakes Basin in Canada" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-05" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Brouwer, Roy " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Liu, Haiyan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Brouwer, R., and Lui, H. (2019). Economic Costs of Eutrophication in The Laurentian Great Lakes Basin in Canada. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Secondary data are extracted by doing a large literature review where we search through relevant published articles, government reports and websites, conference presentations, and unpublished work. Based on these data, we calculate the costs of eutrophication to each impact category with certain assumption on the degree of eutrophication. Different data sources are used to account for calculation uncertainty (we provide a minimum and a maximum of the estimates according to different sources). In most cases, we first calculate the total value of a specific ecosystem service, then get an estimate of eutrophication days in the area, and finally compute the degree the ecoservice is affected by eutrophication, i.e. the economic cost of eutrophication. When the total value of the ecosystem service cannot be retrieved, we use the costs of using substitute products due to deteriorated water, e.g., costs of bottled water for water treatment costs, and government budgets to recover endangered aquatic species for biodiversity costs. Further, assuming the costs to each individual lake is proportional to the population in each lake basin, we allocate the costs to each of the four great lakes in Canada." },
        "gmd:purpose": { "gco:CharacterString": "This data set is collected to support the project titled “Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds: Work Package 4\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund. The main goal of this research is to identify ecosystem services that are negatively affected by water quality deterioration in the Great Lakes Basin on the Canadian side, and further quantify the monetary costs induced by the worsened water quality. We identify and categorize the direct costs into seven groups: costs on property value, recreation, tourism, water treatment, biodiversity, human health, and commercial fishing. The cost estimates inform us how much it will cost us if we do not invest in solutions to promote the recovery of the Great Lakes ecosystem. Considering that climate change and higher temperature can increase algal growth and nutrient runoff, eutrophication might become an even larger problem if actions are not taken immediately. Our research can help the society understand the gravity and urgency of the issue and take appropriate measures to restore and improve the water quality in the Great Lakes Basin and provide better services to local residents and tourists." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Adaptation" },
                { "gco:CharacterString": "Economic value" },
                { "gco:CharacterString": "Ecosystem services" },
                { "gco:CharacterString": "Eutrophication" },
                { "gco:CharacterString": "Great Lakes" },
                { "gco:CharacterString": "Lake Erie" },
                { "gco:CharacterString": "Lake Huron" },
                { "gco:CharacterString": "Lake Ontario" },
                { "gco:CharacterString": "Lake Superior" },
                { "gco:CharacterString": "Phosphorus" },
                { "gco:CharacterString": "Social cost" },
                { "gco:CharacterString": "Water quality" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-05" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Lake Erie, Lake Ontario, Lake Huron, Lake Superior, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-86.6780149" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-78.1064044" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.7288366" },
                "gmd:northBoundLatitude": { "gco:Decimal": "48.0406606" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2017-10-02",
                    "gml:endPosition": "2019-06-25"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Brouwer, Roy (rbrouwer@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-05" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12997_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-26" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12997" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Modelling the environmental factors that control the occurrence of algal blooms in Lake Erie" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-26" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Van Cappellen, Philippe" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Markelov, Igor " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Kheyrollah Pour, Homa " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Van Cappellen, P., Markelov, I., and Kheyrollah Pour, H. (2019). Modelling the environmental factors that control the occurrence of algal blooms in Lake Erie. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "The observed algal distributions will be related to environmental drivers, including: inland (precipitation and river discharge) and lake (ice cover, temperature, wind speed, solar radiation) hydrometeorological forcings, nutrient sources, light penetration, water quality (conductivity, water colour, dissolved organic carbon, nutrients), and circulation patterns. All input data for the lake models will be collected from online via US Environmental Protection Agency and Environment and Climate Change Canada (ECCC) databases. Statistical relationships will be identified using multivariate analyses, and Bayesian probabilistic modeling. Neural network models will be used to identify the drivers that best predict the initiation and proliferation of algal blooms in Lake Erie." },
        "gmd:purpose": { "gco:CharacterString": "Nuisance and harmful algal blooms represent a growing major threat to water security across Canada and the world, because of their undesirable ecological, economic, and health impacts.  This project aims to strengthen the predictive understanding and forecasting of the timing, spatial extent, and intensity of algal blooms of large lakes in cold regions. Lake Erie will be the focus of this project; with the internal phosphorus loading and climate change as key considerations for sustaining algal blooms.  <br/> Note, that this research is part of the CERC Ecohydrology Program funded by Canada Excellence Research Chair and the “Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds: Work Package 2\". Lake Futures is a Pillar 3 project under the Global Water Futures (GWF) Program funded by Canada First Research Excellence Fund (CFREF)." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Chlorophyll" },
                { "gco:CharacterString": "Contaminants" },
                { "gco:CharacterString": "Lake Erie" },
                { "gco:CharacterString": "Nitrogen" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "pH" },
                { "gco:CharacterString": "Phosphorus" },
                { "gco:CharacterString": "Water quality" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-26" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Lake Erie" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-81.2" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-81.2" },
                "gmd:southBoundLatitude": { "gco:Decimal": "42.2" },
                "gmd:northBoundLatitude": { "gco:Decimal": "42.2" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "1980-01-01",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): Other,GWF. For further information: http://desc.ca/programs/iwr" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-26" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12995_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-22" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12995" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Fuzzy Cognitive Mapping Data for Perceptions of Lake Erie Eutrophication: Relationships among Critical Concepts" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-22" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rooney, Rebecca " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Ciborowski, Jan " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Ives, Jessica" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Rooney, R., Ciborowski, J., and Ives, J. (2019). Fuzzy Cognitive Mapping Data for Perceptions of Lake Erie Eutrophication: Relationships among Critical Concepts. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "The current data bring together maps (flowcharts of relationships) created by participants at three workshop series, held in 2009, 2010, and 2013-2014. The maps depict relationships among concepts (+ or -; relationship strength of 1-5 with 5 being strong and 1 being weak) identified as important by workshop participants. Maps were then translated into sparse matrices by project HQP, where the value in Cij represents the strength of the relationship between concepts i and j, which is ith row and jth column of the matrix. The data from each workshop have been combined into an overall consensual fuzzy cognitive map using matrix algebra, depicting a broad understanding of eutrophication in Lake Erie as of 2014. Future workshops are being planned to update this dataset. The updated dataset will allow an assessment of how our understanding of the causes of eutrophication has evolved over time, as well as comparisons of the perceptions of various groups (stakeholders, researchers, etc.)." },
        "gmd:purpose": { "gco:CharacterString": "This data set is collected for the project titled “Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds: Work Package 3.1\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund.  The main goal of this project is to identify links between land-based human activities and the in-lake manifestations of eutrophication. The project uses fuzzy cognitive mapping (FCM) to translate expert knowledge into semi-quantitative data that can be used to link ultimate causes with effects based on best personal judgement, compare perceptions of the cause-effect relationships among groups (researchers, managers, stakeholders, the public), identify important concepts in understanding eutrophication, and run scenarios to understand potential outcomes of management actions. " },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Lake Erie" },
                { "gco:CharacterString": "Lakes" },
                { "gco:CharacterString": "Nutrients" },
                { "gco:CharacterString": "Resource management strategies" },
                { "gco:CharacterString": "Stakeholders" },
                { "gco:CharacterString": "Water quality" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-22" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Lake Erie and its contributing watershed " },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-83.5179" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-78.8153" },
                "gmd:southBoundLatitude": { "gco:Decimal": "41.3805" },
                "gmd:northBoundLatitude": { "gco:Decimal": "42.9158" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2009-02-17",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Researchers and resource managers around Lake Erie gathered at three workshop series held between 2009 and 2014 to discuss causes and outcomes of eutrophication, which affects people around the lake through various undesirable events such as harmful algal blooms, fish kills, and beach fouling. Experts working in teams of 3-6 identified relationships among key concepts, such as ‘water temperature’, ‘fish abundance’, ‘water clarity’, and ‘human population’. By bringing together experts with a range of expertise, we were able to combine their individual, incomplete, views of the issue into an overarching view of the concept of eutrophication in Lake Erie. This view will help us understand how different components of the system interact, and which factors may be most important to understand and focus on for ensuring a healthy Lake Erie for the future. Research Program(s): GWF. For further information: Rooney, Rebecca ( Rebecca.rooney@uwaterloo.ca) " }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-22" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12993_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-25" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12993" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Nutrient Inputs and Outputs for the Greater Toronto Area, Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-25" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Basu, Nandita" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Samson, Melani-Ivy" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Meter, Kimberly" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Basu, N., Samson, M.I., and Van Meter, K. (2019). Nutrient Inputs and Outputs for the Greater Toronto Area, Ontario. Canadian Cryospheric Information Network (CCIN). Unpublished Data. Additional Citation: Samson, M., K.J. Van Meter, N.B. Basu. Urban Metabolism of the Greater Toronto Area: A Study of Nitrogen and Phosphorus Across an Urban, Suburban, and Rural Continuum, Masters Thesis, University of Waterloo." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "In this work, a mass balance approach was used to quantify the flow of nutrients through urban, suburban, and rural areas of the Greater Toronto Area. A wide range of factors are considered, including human behaviour, domestic animals, stormwater management, and wastewater treatment processes. The necessary data from Census Canada and municipalities (such as wastewater treatment reports) were gathered and consolidated manually to consider missing information due to sampling or privacy issues. Maps were generated in ArcGIS to spatially locate inputs such as fertilizer (separately for residential lawns, agricultural fields, and parks) and food consumption (humans, pets, and livestock) as well as outputs such as crop production and wastewater treatment plant outfalls. The land divisions (urban, suburban, and rural) were determined using land use maps and population density in ArcGIS. " },
        "gmd:purpose": { "gco:CharacterString": "The purpose of this research project is to quantify nitrogen and phosphorus flows through a mixed urban and rural area. There is particular interest to find the ways in which increasing population densities in the Greater Toronto Area are impacting nutrient flows across Southern Ontario’s urban/rural continuum and how changing nutrient dynamics may lead to increasingly impaired water quality in Lake Ontario and beyond. This work looks to establish the “metabolism” of the Greater Toronto Area in 2011 through the analysis of the various inputs and outputs of the system that includes factors such as food consumption, fertilizer usage, crop production, and wastewater treatment plants outputs.<br/>This data set is collected for the project titled \"Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Food" },
                { "gco:CharacterString": "Nitrogen" },
                { "gco:CharacterString": "Nutrient cycling" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Phosphorus" },
                { "gco:CharacterString": "Water quality" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-25" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Region of Peel, Halton Region, York Region, Region of Durham, 	City of Toronto, Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.169" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-79.4248" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.2822" },
                "gmd:northBoundLatitude": { "gco:Decimal": "44.5173" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2011-01-01",
                    "gml:endPosition": "2011-12-27"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: nandita.basu@uwaterloo.ca" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-25" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12960_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-05" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12960" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Linking spectral induced polarization (SIP) and subsurface microbial processes: Results from sand column incubation experiments" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-05" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Cappellen, Philippe " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Mellage, Adrian " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Estella , Atekwana" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Furman, Alex " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Rezanezhad, Fereidoun" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Smeaton, Christina" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Van Cappellen, P., Mellage, A., Estella, A., Furman, A., Rezanezhad, F. and Smeaton, A. (2019) Linking spectral induced polarization (SIP) and subsurface microbial processes: Results from sand column incubation experiments. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data. <br/>Additional Publications: Linking Spectral Induced Polarization (SIP) and Subsurface Microbial Processes: Results from Sand Column Incubation Experiments.<br/>Adrian Mellage, Christina M. Smeaton, Alex Furman, Estella A. Atekwana, Fereidoun Rezanezhad, and Philippe Van Cappellen.<br/>Environmental Science & Technology 2018 52 (4), 2081-2090.<br/>DOI: 10.1021/acs.est.7b04420." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "This dataset is comprised of spectral induced polarization (SIP) spectra and complementary biogeochemical data obtained in saturated columns packed with alternating layers of ferrihydrite-coated and pure quartz sand. Six identical column reactors were packed with the layered sand configuration and inoculated with Shewanella oneidensis supplemented with lactate and nitrate. Each replicate was sequentially sacrificed at pre-specified time points in order to monitor aqueous concentrations related to the dissimilatory reduction of nitrate to ammonium, coupled to the oxidation of lactate. The column sampled at the end of the incubation (i.e., sampled last), was fitted with electrodes for SIP measurements, conducted periodically (on the order of hours) throughout the incubation. Sacrificial sampling was necessary to relate bulk processes to SIP signals being measured within the experimental system. Furthermore, simulated biogeochemical concentration time-series and reaction rates were generated by a biomass-explicit diffusion-reaction model, fitted to the experimental biogeochemical data. A Cole-Cole relaxation was performed on the spectral geophysical data in order to extract chargeability and relaxation times, to relate these to microbial abundance and physiology as well as model-computed reaction rates." },
        "gmd:purpose": { "gco:CharacterString": "This dataset was developed with the intention of capturing induced polarization, geo-electrical, responses associated with the growth dynamics of organic carbon degrading anaerobic subsurface microbes. The combined biogeochemical monitoring, spectral induced polarization measurements and both reactive transport and geophysical modeling, resulted in the generation of a unique, cross-disciplinary dataset that combines information gained from different approaches across two major geoscience disiplines. Specifically, experimental data and modelling of biogeochemical processes are combined with geophysical measurements and modelling, combining biogeochemistry and geophysics." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "planned",
            "-codeSpace": "ISOTC211/19115",
            "#text": "planned"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Biogeochemistry" },
                { "gco:CharacterString": "Dielectric" },
                { "gco:CharacterString": "Geophysical surveys" },
                { "gco:CharacterString": "Groundwater" },
                { "gco:CharacterString": "Mineralogy" },
                { "gco:CharacterString": "Ontario" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-05" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Ecohydrology Research Group Laboratory, University of Waterloo, Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.3242" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-80.3242" },
                "gmd:southBoundLatitude": { "gco:Decimal": "42.2814" },
                "gmd:northBoundLatitude": { "gco:Decimal": "42.2814" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-09-28",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Mellage, Adrian amellage@uwaterloo.ca" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-05" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12959_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-25" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12959" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Nutrient Data in Fanshawe Reservoir, Thames River, Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-25" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Cappellen, Philippe" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Kao, Tung" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Parsons, Chris" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Van Cappellen, P., Kao, T. and Parsons, C. (2018) Nutrient Data in Fanshawe Reservoir, Thames River, Ontario. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Study sites upstream, downstream and within the reservoir are being sampled biweekly. Sampling includes collection of water and sediment samples, acquisition of depth profiles for various parameters (pH, redox potential, temperature, conductivity), measurement of pumped samples from the middle of the epilimnion and hypolimnion using a YSI probe, collection of sediment cores using a percussion gravity corer and sampling of sediment traps. The period of data collection commenced in January 2018 and is scheduled to end in spring 2019. A peristaltic pump is being used to collect samples in the water column, sediment is collected using an Eckman grab sampler. All samples collected thus far have been analyzed in Ecohydrology Research Group Laboratory facilities." },
        "gmd:purpose": { "gco:CharacterString": "The overarching objective of MOECC Thames River Phosphorus Dynamics Study is to improve the conceptual as well as quantitative understanding of how nutrient loadings from the landscape translate to nutrient loadings to receiving water bodies after retention, remobilization and transformation processes in the Thames River channel and its tributaries, as well as to provide an improved understanding of the potential in-stream interventions which could decrease sediment and nutrient loading in the basin. Fanshawe Reservoir was selected for study due to its potential role as a modifier of phosphorus speciation and load, integrating loading from a large area of the Upper Thames watershed before its eventual discharge to Lake St Clair and the western basin of Lake Erie. The data collected will be used to calibrate and validate a model in CE-QUAL-W2 as well as produce a multi-seasonal P mass balance for the reservoir at a monthly resolution. This data collected will also be used to support the project titled \"Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Nutrient availability" },
                { "gco:CharacterString": "Nutrient cycling" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "pH" },
                { "gco:CharacterString": "Phosphorus" },
                { "gco:CharacterString": "River" },
                { "gco:CharacterString": "Sediments" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-25" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Fanshawe Reservoir at Thames River, Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-81.195221" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-81.158456" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.047561" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.15019" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-01-01",
                    "gml:endPosition": "2020-06-30"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Parsons, Chris (chris.parsons@uwaterloo.ca) " }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-25" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12958_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-22" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12958" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Phosphorus Uptake of Crops in Ontario Counties from 1961-2016" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-22" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Cappellen, Philippe " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Staden, Tamara " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Basu, Nandita" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Mohamed, Mohamed" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Parsons, Chris" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Van Cappellen, P., Van Staden, T., Basu, N., Mohamed, M., and Parsons, C. (2019). Phosphorus Uptake of Crops in Ontario Counties from 1961-2016. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data.<br/>Additional Publication: Van Staden T., Basu N., Van Meter K., and Van Cappellen P.  Targeting Phosphorus Legacies in the Laurentian Great Lakes Watershed. Manuscript in preparation" }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Annual crop uptake of phosphorus in kilograms for each census year on a census division scale, taken every five years beginning in 1961. Data were used in the Net Anthropogenic Phosphorus Inputs (NAPI) model. SGC or ID is the unique Standard Geographic Code that represents the county, Name is the name of the census division, and the region is the agricultural region the county is in: South (1), West (2), Central (3), West (4), North (5). The raw data were downloaded from the publicly available census available at: http://odesi2.scholarsportal.info/webview/ in the Agriculture tab. All data were standardized to the census division distribution in 2011, i.e. any divisions or subdivisions that were amalgamated into other divisions were accounted for." },
        "gmd:purpose": { "gco:CharacterString": "This research project  aims to address the spatial and temporal evolution of anthropogenic phosphorus inputs into Ontario watersheds. Collected data includes number of livestock, area of crops grown, area fertilized, total cropland area, and population size in each county in Ontario. The outcome of the data processing was total kg of phosphorus per hectare added to the watersheds of Ontario, which was spatially represented in a map of Ontario. Note, that this data set is  also collected to support the objectives of two projects. These are: 1) Legacies of Agricultural Pollutants (LEAP) funded by Natural Sciences and Engineering Research Council of Canada  and other international partners. 2)  \"Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund" },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Chemistry" },
                { "gco:CharacterString": "Nutrient availability" },
                { "gco:CharacterString": "Nutrients" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Phosphorus" },
                { "gco:CharacterString": "Water quality" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-22" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-95.16" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-74.34" },
                "gmd:southBoundLatitude": { "gco:Decimal": "41.66" },
                "gmd:northBoundLatitude": { "gco:Decimal": "56.86" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "1961-09-01",
                    "gml:endPosition": "2016-12-30"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): Other,GWF. For further information: Van Staden, Tamara (tvanstad@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-22" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "12957_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-25" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=12957" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Surface water and sediment quality data in the Grand River Watershed, focused on Belwood and Conestogo reservoirs " },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-25" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Nandita , Basu" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Tenkouano, Guy-Thierry" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Cappellen, Philippe" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Basu, N., Tenkouano, G.-T. and Van Cappellen, P. (2018) Surface water and sediment quality data in the Grand River Watershed, focused on Belwood and Conestogo reservoirs. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "The primary focus of this research is to determine the nutrient dynamics within these reservoirs. Sediment cores were collected from Lake Belwood (Febuary 14th, 2018) and Conestogo Lake (July 17th, 2018) and analyzed for sedimentation rate and radioisotope dating, trace metals, total phosphorus (TP), carbon (TC), and nitrogen (TN), and isotopes (δ13C and δ15N). Between June 1st, 2018 and July 26th, 2018, surface water samples were collected biweekly and analyzed for soluble reactive phosphorus (SRP), total phosphorus (TP), total dissolved phosphorus (TDP), cations, nonpurgeable organic carbon (NPOC), total nitrogen (TN) and dissolved inorganic nitrogen (DIC). Field data included in-field measurements of temperature, dissolved oxygen, temperature, pH and Eh, the use of a water column profiler which provided data on depth, temperature, photosyntheticactive radiation, fluorometry-chlorophyll, conductivity and dissolved oxygen. Samples were analyzed in various labs across campus including the Ecohydrology Research lab, the WATER lab, and the Environmental Isotope Laboratory at the University of Waterloo." },
        "gmd:purpose": { "gco:CharacterString": "This dataset  was developed in order to improve the understanding of long-term nutrient retention within reservoirs and to quantify the potential contributions of reservoir nutrient legacies to current and future water quality in watersheds around the Great Lakes. Specifically, this dataset will  provide information on the accumulation of nutrients within the reservoirs at Lake Belwood and Conestogo Lake located within the Grand River Watershed.  Note, that this data set is collected for the project titled \"Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Carbon" },
                { "gco:CharacterString": "Limnology" },
                { "gco:CharacterString": "Nitrogen" },
                { "gco:CharacterString": "Nutrients" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Phosphorus" },
                { "gco:CharacterString": "Sediments" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-25" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Lake Belwood and Conestogo Lake, Grand River Watershed, Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.7178777" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-80.272744" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.6764444" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.862008" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-02-14",
                    "gml:endPosition": "2018-07-26"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Basu, Nandita (nandita.basu@uwaterloo.ca) " }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-25" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13046_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-04-03" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13046" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Soil Data: Harmonized World Soil Database (HWSD) for the Great Lakes (resolution: 30 arcseconds)" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-04-03" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Tolson, Bryan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Mai, Juliane" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Abrahamowicz, Maria" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Awoye, Hervé" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Dimitrijevic, Milena" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Durnford, Dorothy" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "FitzGerald, Katelyn" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Fry, Lauren" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Gaborit, Étienne" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Gasset, Nicolas" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Gharari, Shervan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Gronewold, Drew" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Haghnegahdar, Amin" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Hamlet, Alan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Hunter, Tim" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Jenkinson, Wayne" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Lan Shin, Young" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Mason, Lacey" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Ni, Xiaojing" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Pietroniro, Al" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Princz, Daniel" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Razavi, Saman" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Read, Laura" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Sampson, Kevin" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Seglenieks, Frank" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Shen, Hongren" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Smith, Joeseph" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Stadnyk, Tricia" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Yongping, Yan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Fischer, G., F. Nachtergaele, S. Prieler, H.T. van Velthuizen, L. Verelst, D. Wiberg, 2008. Global Agro-ecological Zones Assessment for Agriculture (GAEZ 2008). IIASA, Laxenburg, Austria and FAO, Rome, Italy." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Soil data were downloaded from the United Nations Food and Agriculture Organization (FAO) Harmonized World Soil Database (HWSD) v1.2. This dataset is a 30 seconds of arc resolution which corresponds to about 1km at the equator. More details on this dataset can be found at http://www.fao.org/soils-portal/soil-survey/soil-maps-and-databases/harmonized-world-soil-database-v12/en/. The region of interest (Great Lakes) was cropped and data converted into ASCII and NetCDF formats. Researchers interested in data can email Juliane Mai (University of Waterloo; juliane.mai@uwaterloo.ca)" },
        "gmd:purpose": { "gco:CharacterString": "The Great Lakes Runoff Inter-comparison Project (GRIP) includes a wide range of lumped and distributed models that are used operationally and/or for research purposes across Canada and the United States. Participating models are  Global Environmental Multi-scale (GEM- Hydro), Weather Research and Forecasting (WRF-Hydro), MEC-Surface & Hydrology (MESH), Variable Infiltration Capacity (VIC), WATFLOOD, HYdrological Predictions for the Environment (HYPE), Soil & Water Assessment Tool (SWAT) and Large Basin Runoff Model (LBRM). The project aims to run all these models over several regions in Canada with Great Lakes, focusing on Lake Erie and Lake St.Clair, as the initial domain (GRIP-E). This project will also focus on identifying a standard, consistent dataset for model building that all participants in the inter-comparison project can access and then process to generate their model-specific required inputs.  <br/><br/>This data set is collected for the project titled \"Integrated Modelling Program for Canada (IMPC): Theme 1\", which is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Great Lakes" },
                { "gco:CharacterString": "Lake Erie" },
                { "gco:CharacterString": "Lakes" },
                { "gco:CharacterString": "Maps" },
                { "gco:CharacterString": "Modeling" },
                { "gco:CharacterString": "Nutrients" },
                { "gco:CharacterString": "Satellite imagery" },
                { "gco:CharacterString": "Soils" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-04-03" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Great Lakes;<br/>Lake Erie;<br/>Lake St. Clair" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-85.86407" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-77.44696" },
                "gmd:southBoundLatitude": { "gco:Decimal": "41.38199" },
                "gmd:northBoundLatitude": { "gco:Decimal": "45.38603" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2009-02-17",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Mai, Juliane (University of Waterloo; juliane.mai@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-04-03" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13042_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-26" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13042" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Hydrogeology, isotope, and geochemical data from Bogg Creek, Sahtu Settlement Area, Northwest Territories" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-26" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rudolph, David " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Wicke, Andrew " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Vandenhoff, Aaron" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "pointOfContact",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "pointOfContact"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Rudolph, D., Wicke, A., and Vandenhoff, A. (2019). Hydrogeology, isotope, and geochemical data from Bogg Creek, Sahtu Settlement Area, Northwest Territories. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Digital Elevation Model data and climate data for this project were downloaded from publicly available online sources from Government of Canada Open Data Catalogue GEOGRATIS (http://geogratis.cgdi.gc.ca/) and Environment Canada and Climate Change (http://climate.weather.gc.ca/) websites respectively; data will also be collected during fieldwork. Field techniques included collection of various tracers such as isotopes, geochemistry, and temperature. Data includes surface water and shallow groundwater quality and chemistry, 18O, 2H, 3H, 87Sr, and 13C isotopes, as well as sampling locations, measurements of active layer thickness, hydraulic conductivity and geology. Data is in spreadsheet and shapefiles/geospatial data formats." },
        "gmd:purpose": { "gco:CharacterString": "This project aims to characterize and map groundwater flow within a discontinuous permafrost region at Bogg Creek Watershed, near Norman Wells, Northwest Territories, using indirect techniques, such as tracers. Hydrocarbon extraction and climate change both pose potential threats to groundwater and surface water resources in northern, permafrost regions, prompting the need for baseline monitoring of water resources prior to disturbance. Collecting baseline data can be expensive, difficult and even impractical given the unique environment and extreme climate, and few standard protocols exist. This data forms the basis of an exploration into the viability of using indirect methods of characterizing groundwater flow in this region. This is in order to form a conceptual model that can be used to select further monitoring sites. This is via use of several environmental tracers, including temperature, isotopes, and geochemistry.<br/><br/>This data set is collected for the project titled â€œTransformative sensor Technologies and Smart Watershed (TTWS): Work Package 1\". TTWS a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Active layer" },
                { "gco:CharacterString": "Baseline data" },
                { "gco:CharacterString": "Geology" },
                { "gco:CharacterString": "Groundwater" },
                { "gco:CharacterString": "Hydrocarbon" },
                { "gco:CharacterString": "Isotopes" },
                { "gco:CharacterString": "Northwest Territories" },
                { "gco:CharacterString": "Permafrost" },
                { "gco:CharacterString": "Temperature" },
                { "gco:CharacterString": "Water chemistry" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-26" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Bogg Creek Watershed, Sahtu Settlement Area, Northwest Territories, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-126.71" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-125.13" },
                "gmd:southBoundLatitude": { "gco:Decimal": "64.85" },
                "gmd:northBoundLatitude": { "gco:Decimal": "65.18" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-08-20",
                    "gml:endPosition": "2019-04-29"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Rudolph, David ( University of Waterloo, drudolph@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-26" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13040_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-26" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13040" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Conditioned Shuttle Radar Topography Mission (SRTM) Digital Elevation Model (DEM) from HydroSHEDS at 90m" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-26" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Tolson, Bryan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Mai, Juliane" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Abrahamowicz, Maria" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Awoye, Hervé" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Dimitrijevic, Milena" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Durnford, Dorothy" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "FitzGerald, Katelyn" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Fry, Lauren" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Gaborit, Étienne" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Gasset, Nicolas" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Gharari, Shervan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Gronewold, Drew" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Haghnegahdar, Amin" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Hamlet, Alan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Hunter, Tim" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Jenkinson, Wayne" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Lan Shin, Young" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Mason, Lacey" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Ni, Xiaojing" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Pietroniro, Al" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Princz, Daniel" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Razavi, Saman" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Read, Laura" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Sampson, Kevin" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Seglenieks, Frank" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Shen, Hongren" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Smith, Joeseph" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Stadnyk, Tricia" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Yongping, Yan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Lehner, B., Verdin, K., Jarvis, A. (2008): New global hydrography derived from spaceborne elevation data. Eos, Transactions, AGU, 89(10): 93-94." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "The conditioned SRTM Digital Elevation Model (DEM) were downloaded from HydroSHEDS website (https://hydrosheds.cr.usgs.gov/index.php). It has a 3'' resolution which corresponds to about 90 m at the equator.<br/><br/>The region of interest (Great Lakes) is cropped and data converted into formats ASCII and NetCDF. Data are then made available to the project collaborators on a private GitHub. Researchers interested in data can email Juliane Mai (University of Waterloo; juliane.mai@uwaterloo.ca)" },
        "gmd:purpose": { "gco:CharacterString": "The Great Lakes Runoff Inter-comparison Project (GRIP) includes a wide range of lumped and distributed models that are used operationally and/or for research purposes across Canada and the United States. Participating models are  Global Environmental Multi-scale (GEM- Hydro), Weather Research and Forecasting (WRF-Hydro), MEC-Surface & Hydrology (MESH), Variable Infiltration Capacity (VIC), WATFLOOD, HYdrological Predictions for the Environment (HYPE), Soil & Water Assessment Tool (SWAT) and Large Basin Runoff Model (LBRM) The project aims to run all these models over several regions in Canada with Great Lakes, focusing on Lake Erie and Lake St.Clair as the initial domain (GRIP-E). This project will also focus on identifying a standard, consistent dataset for model building that all participants in the inter-comparison project can access and then process to generate their model-specific required inputs.  <br/><br/>This data set is collected for the project titled \"Integrated Modelling Program for Canada (IMPC): Theme 1\", which is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Great Lakes" },
                { "gco:CharacterString": "Lake Erie" },
                { "gco:CharacterString": "Lakes" },
                { "gco:CharacterString": "Maps" },
                { "gco:CharacterString": "Modeling" },
                { "gco:CharacterString": "Nutrients" },
                { "gco:CharacterString": "Satellite imagery" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-26" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Great Lakes;<br/>Lake Erie;<br/>Lake St. Clair" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-85.86407" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-77.44696" },
                "gmd:southBoundLatitude": { "gco:Decimal": "41.38199" },
                "gmd:northBoundLatitude": { "gco:Decimal": "45.38603" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2009-02-17",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Mai, Juliane (University of Waterloo; juliane.mai@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-26" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13038_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-04-02" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13038" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Development of a hydro-economic model for the Great Lakes Basin using the input-output framework and disaggregated by sub-basins." },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-04-02" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Brouwer, Roy " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Garcia, Jorge" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Brouwer, R., and Garcia, J. (2019). Development of a hydro-economic model for the Great Lakes Basin using the input-output framework and disaggregated by sub-basins. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Input data are downloaded for Ontario from secondary sources which are mainly from Statistics Canada (SC) website at https://www.statcan.gc.ca/eng/start and Environment and Climate Change Canada (ECCC) website at https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/water-withdrawal-consumption-sector.html. Economic numbers for 2015 are taken from the ‘supply and use tables’ published by SC. Water use data are taken from the ‘agriculture water survey’, ‘industrial water survey’, and ‘drinking water plants survey’ from SC. Data relating employment and population, per subdivision in Ontario, are taken from the 2016 Census by SC. Boundary geographical maps of subdivisions and sub-basin boundary files are taken from SC. Water withdrawals and consumption per sector’ for 2014 were downloaded from the ECCC website. The data from Ontario will be use as input forcing for the hydro-economic model for the Great Lakes Basin." },
        "gmd:purpose": { "gco:CharacterString": "This project will develop an integrated hydro-economic model to assess impacts produced by water changes (in quantity and quality) to the gross output of industries located inside the Great Lakes Basin (GLB). This work seeks to assign a dollar value to each cubic meter of water that is reduced or polluted, quantifying the direct effects to the disrupted industry/geography, as well as the spillovers to other regions. The three main goals are: 1) estimate inter-regional trade flows between lake sub-basins, 2) estimate sub-basin gross output, and 3) perform impact scenarios to assess the sensitivity of industries, or regions, to water disruptions. The construction of a quantitative description, linking water to gross output, is a necessary step to properly assess the cost of environmental policies to the GLB, especially because it is responsible for about 36% of the total Canadian output. This data set is collected to support objectives of the project titled \"Integrated Modelling Program for Canada (IMPC): Theme 2\", which is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Great Lakes" },
                { "gco:CharacterString": "Impact assessments" },
                { "gco:CharacterString": "Policy" },
                { "gco:CharacterString": "Regional scale modeling" },
                { "gco:CharacterString": "Scenarios" },
                { "gco:CharacterString": "Statistics (transdisciplinary)" },
                { "gco:CharacterString": "Water" },
                { "gco:CharacterString": "Water budget" },
                { "gco:CharacterString": "Water quality" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-04-02" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Great Lakes Basin and Ontario" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-95.2196" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-74.2405" },
                "gmd:southBoundLatitude": { "gco:Decimal": "41.893" },
                "gmd:northBoundLatitude": { "gco:Decimal": "56.8875" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2014-01-01",
                    "gml:endPosition": "2016-12-30"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Brouwer, Roy (University of Waterloo, rbrouwer@uwaterloo.ca)." }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-04-02" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13037_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-25" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13037" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Auditory and visual data of bird species in mountain wetlands, Upper Bow River Basin, Alberta, Canada." },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-25" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rooney, Rebecca " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Reynolds, Jordan	" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Bolding, Matthew " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Pearson, Jessie " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Rooney, R., Reynolds, J., Bolding, M., and Pearson, J. (2019). Auditory and visual data of bird species in mountain wetlands, Upper Bow River Basin, Alberta, Canada. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Data was collected using autonomous recording units (ARU), and in-person point count surveys, during the 2018 field season. Variables such as: dominant vegetation cover, area of peatland, elevation, Natural Subregion classification, distance to closest road, ambient noise, wind speed, date and time of year, were collected along with the point counts and recorded files. Spectrograms were used to analyze recorded files since each bird species have unique songs and calls. Once files were processed a list of bird species present at each site was used for statistical analysis. This data collection method will also be repeated for the 2019 field season." },
        "gmd:purpose": { "gco:CharacterString": "The objectives of this project is to determine the bird species richness in mountain peatlands along an elevation gradient in the Upper Bow River Basin, and model how community composition changes along an elevation gradient. The purpose of this study is to understand what birds occupy mountain peatlands, and studying birds along an elevation gradient can be a proxy for how species richness and community composition will change with the changing climate. Also, bird watching is a very popular economic activity and this taxonomic group is a great motivator for those who care about habitat protection, but before we can protect birds in mountain peatlands, we need to know: what species are there, the number of species, and what influences their presence.<br/><br/>This data set is collected for the project titled â€œFuture Water for the Mountain West\", which is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Acoustic" },
                { "gco:CharacterString": "Biodiversity" },
                { "gco:CharacterString": "Birds" },
                { "gco:CharacterString": "Canada" },
                { "gco:CharacterString": "Gradients" },
                { "gco:CharacterString": "Land cover" },
                { "gco:CharacterString": "Peatland" },
                { "gco:CharacterString": "Transect" },
                { "gco:CharacterString": "Vegetation" },
                { "gco:CharacterString": "Wind speed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-25" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Upper Bow Basin, Alberta, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-115.398726" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-114.780684" },
                "gmd:southBoundLatitude": { "gco:Decimal": "50.778609" },
                "gmd:northBoundLatitude": { "gco:Decimal": "51.421386" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-05-01",
                    "gml:endPosition": "2019-08-27"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Rooney, Rebecca (University of Waterloo rrooney@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-25" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13036_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-28" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13036" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Optimal fertilizer application decision under crop price and weather uncertainty, Haldimand—Norfolk district, Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-28" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Insley, Margaret" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Yang, Xinyuan" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Insley, M., and Yang, X. (2019). Optimal fertilizer application decision under crop price and weather uncertainty, Haldimand—Norfolk district, Ontario. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Daily precipitation and temperature data for the London International Airport weather station site will be downloaded from the Environment Canada website. London's climate data will be used as it is the closest location with long term data near the study area. Climate data will be used to calculate growing-degree days and to model weather regimes. Corn yield data will be extracted from existing literature, in the Haldimand—Norfolk electoral district, to help develop a yield response model. The parameterisation for the crop growth model will be collected from available literature. Then, a statistical model will be built to represent the farmers' fertiliser application problem, and a numerical relationship will be derived from using the model." },
        "gmd:purpose": { "gco:CharacterString": "The main goal of this research is to model the farmers’ optimal agricultural fertilization behaviour under two uncertainties: 1) crop price uncertainty and 2) weather uncertainty. The weather uncertainty takes into consideration two factors: precipitation and temperature. Understanding the factors that influence farmers’ decisions on fertilizer application could help to update the recommended fertilizer application rate and support the design of best management practices in fertilizer application. This understanding of farmers' behaviour under uncertainty, can then inform nutrient control strategies aimed at reducing nutrient inputs to the Great Lakes. This data set is collected to support the project titled “Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds: Work Package 4\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Extreme weather" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Precipitations" },
                { "gco:CharacterString": "Social benefits" },
                { "gco:CharacterString": "Social cost" },
                { "gco:CharacterString": "Temperature" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-28" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Haldimand—Norfolk District, Ontario" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.408611" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-79.853333" },
                "gmd:southBoundLatitude": { "gco:Decimal": "42.803333" },
                "gmd:northBoundLatitude": { "gco:Decimal": "42.986111" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "1990-01-01",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Xinyuan Yang (University of Waterloo, yang3v@outlook.com)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-28" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13033_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-19" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13033" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Controls on freezing-thaw cycles in a fully coupled thermo-hydro-mechanical system in permafrost area, Central Mackenzie Valley, Northwest Territories" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-19" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rudolph, David " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Huang, Xiang " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Rudolph, D., and Huang, X. (2019). Controls on freezing-thaw cycles in a fully coupled thermo-hydro-mechanical system in permafrost area, Central Mackenzie Valley, Northwest Territories. Canadian Cryospheric Information Network (CCIN). Unpublished data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "This study will collect a series of temperature and moisture observations from existing column experiments to verify the development of coupled moisture and heat transport model. Other selected analytical and numerical results will also be compared with our simulations. In addition, the typical strain and/or stress measurements from available literature will be used to validate the coupled THM model system. In the one dimensional  and two dimensional synthetic case models, simulations will produce high-resolution of temperature, thermal conductivity, heat capacity, liquid water, ice water, freezing point depression, saturation degrees, hydraulic conductivity, stress, strain, frost penetration, deformation rate, potential damage-crack, etc., in space and time. While in the virtual and real watershed cases, the collected long-term time series of field observations, such as hydrogeological maps, hydraulic head, fluxes, precipitation, temperature, ground surface subsidence, chloride concentration, and so on, will be used to calibrate and validate the model." },
        "gmd:purpose": { "gco:CharacterString": "Numerical analysis of coupled water, vapor, heat, and stress fields are used to quantify the interactions between surface water and groundwater flow and thermal dynamics related to freezing-thaw and expansion-settlement in seasonally frozen areas. The model structure will be calibrated and validated using measurements, such as the moisture, temperature, and strains in the literature. Then, a virtual watershed approach will be used to test and modify the coupled framework, according to field observations and other well-recognized scientific findings. Finally, this modified model framework will be applied into typical permafrost area, to investigate thermo-hydraulic-mechanical (THM) dynamics, and predict possible damage-related processes in the context of climate change. This model framework and generated data will support the project titled â€œNorth Water Futures Big Data Platform and \"Smart Watersheds\". These are Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Climate change" },
                { "gco:CharacterString": "Contaminants" },
                { "gco:CharacterString": "Freeze-up" },
                { "gco:CharacterString": "Groundwater" },
                { "gco:CharacterString": "Ice" },
                { "gco:CharacterString": "Mackenzie River" },
                { "gco:CharacterString": "Modeling" },
                { "gco:CharacterString": "Northwest Territories" },
                { "gco:CharacterString": "Permafrost" },
                { "gco:CharacterString": "Surface water runoff" },
                { "gco:CharacterString": "Thawing" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-19" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Central Mackenzie Valley, Northwest Territories, Canada; <br/>Bogg Creek Watershed, Northwest Territories, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-126.9" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-125.6" },
                "gmd:southBoundLatitude": { "gco:Decimal": "64.9" },
                "gmd:northBoundLatitude": { "gco:Decimal": "65.3" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-09-16",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Rudolph, David ( University of Waterloo, drudolph@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-19" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13032_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-04-02" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13032" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Data on policy development and implementation to address eutrophication in the western Lake Erie basin, Canada." },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-04-02" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " de Loë, Rob" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Mills, Erin " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "de Loë, R., and Mills, E. (2019). Data on policy development and implementation to address eutrophication in the western Lake Erie basin, Canada. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "The proposed study uses document analysis, policy Delphi surveys, and interviews as data collection methods to qualitatively analyze water governance in the western Lake Erie basin and identify drivers of eutrophication.<br/><br/><br/>Documents related to nutrient management in the western Lake Erie basin will be analyzed to understand the existing water governance system. Documents reviewed may include legislation, agreements, guidance documents, progress reports, assessments of progress, and action plans from the Canada, Ontario, U.S., and state governments. These documents will be collected using internet and library sources, and through requests to appropriate bodies when necessary. The document analysis will inform the development of questions for the policy Delphi surveys and the semi-structured interviews.<br/><br/>The policy Delphi survey will consist of two rounds of surveys with experts to identify and understand the drivers of eutrophication in the western Lake Erie basin, and whether they are considered by the water governance system. Participants of the policy Delphi survey will be selected with purposive sampling, based on identifying experts on nutrient management and water governance in the western Lake Erie basin. The results of the policy Delphi surveys will inform the development of questions for the semi-structured interviews, as well as potential participants. <br/><br/>The interviews will be an in-depth investigation of selected external drivers of eutrophication in the western Lake Erie basin, and how they are accounted for (or not) by the governance system, and to explore opportunities for innovation in the water governance system. Semi-structured interviews will be conducted with the individuals involved in or associated with water governance in the western Lake Erie basin, and individuals identified through the policy Delphi surveys as being, or associated with, an external driver of eutrophication in the western Lake Erie basin. Participants may include representatives from government agencies, non-governmental organizations, and academia." },
        "gmd:purpose": { "gco:CharacterString": "The purpose of the research is to understand how the governance system for nutrient management in the western Lake Erie basin enables, or hinders, consideration of external drivers. Four interrelated objectives will be pursued to accomplish this purpose:<br/>(i)	Characterize the existing governance system for nutrient management in the western Lake Erie basin and the scales at which it is operating;<br/>(ii)	Identify external drivers of eutrophication in the western Lake Erie basin, and evaluate the extent to which they are accounted for in the existing governance system;<br/>(iii)	Examine the extent to which the governance system affects consideration of external drivers; and<br/>(iv)	If the current governance system hinders consideration of external drivers, explore ways of modifying the governance system.<br/><br/>The research is motivated by a need for advancement in both water governance practice and theory. Practically, the causes and drivers of many water issues are partly, or wholly, external to those traditionally considered within the water sector, and assessing these external drivers will ensure that water officials can achieve their goals of addressing eutrophication in the western Lake Erie basin. Theoretically, the water governance literature has focused on overcoming challenges “internal” to the water community, and it is necessary to also focus on addressing challenges “external” to the water community.  This dataset will support the project titled \"Linking Water Governance to Economic, Social and Political Drivers\" which is a Pillar 1-2 project under the Global Water Futures Program funded by Canada First Research Excellence Fund" },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Eutrophication" },
                { "gco:CharacterString": "Governmental policies" },
                { "gco:CharacterString": "Interview" },
                { "gco:CharacterString": "Lake Erie" },
                { "gco:CharacterString": "Nutrient availability" },
                { "gco:CharacterString": "Policy" },
                { "gco:CharacterString": "Water" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-04-02" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Western Lake Erie basin, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-83.55" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-82.2425" },
                "gmd:southBoundLatitude": { "gco:Decimal": "41.31833" },
                "gmd:northBoundLatitude": { "gco:Decimal": "42.115" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-11-01",
                    "gml:endPosition": "2020-09-27"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: de Loë, Rob (University of Waterloo, rdeloe@uwaterloo.ca) " }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-04-02" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13031_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-14" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13031" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Criteria-based ranking (CBR): A comprehensive process for selecting and prioritizing monitoring indicators" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-14" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Courtenay,  Simon" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Ho, Elaine" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Eger, Sondra" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Courtenay, S., Ho, E., and Eger, S. (2019). Criteria-based ranking (CBR): A comprehensive process for selecting and prioritizing monitoring indicators. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data. Additional Publication: Ho, E. (2018). Criteria-based ranking (CBR): A comprehensive process for selecting and prioritizing monitoring indicators. MethodsX 5: 1324-1329. doi: 10.1016/j.mex.2018.10.015" }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "A review of the Muskoka Watershed Council reporting, as well as literature that also reviewed other programs, demonstrated a need for a standard, more objective, approach for identifying, and where budgetary limitations require, prioritizing indicators or reducing their numbers.  The Criteria-based Ranking (CBR) process was developed, inspired by tools used in Environmental Assessment. A workshop with members and guests of the Muskoka Watershed Council was carried out on August 5, 2016, at which the CBR process was tested to see if using the process would yield different results than the conventional approach. The outcome of the workshop was that using this standard process generated a very different outcome than what emerged from the conventional approach." },
        "gmd:purpose": { "gco:CharacterString": "Resources allocated to water management often fluctuate. As a result, the types and number of parameters (e.g., indicators for ecosystem health) being measured, in monitoring programs, are frequently reassessed according to management (or political) priorities, limits on budgets, and availability of human resources. The periodic need to refocus monitoring, conflicts with the need to maintain consistent, long-term indicators that are used to demonstrate changes to ecosystem health, or define ‘abnormal’ indicator measures. Conventional approaches are subjective, time-consuming, and non-standardized. This research developed and tested whether a new approach would reduce time and cost, while increasing objectivity and monitoring adaptability (to fluctuating resources). This project was funded by the Canadian Water Network, but the data collected will also support the research objectives of the project titled \"Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds: Work Package 3\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund" },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "completed",
            "-codeSpace": "ISOTC211/19115",
            "#text": "completed"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Ecosystem" },
                { "gco:CharacterString": "Freshwaters" },
                { "gco:CharacterString": "Impact assessments" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-14" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "District Municipality of Muskoka, Ontario, Canada - FDNNR  " },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-79.34957" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-79.34957" },
                "gmd:southBoundLatitude": { "gco:Decimal": "45.1387" },
                "gmd:northBoundLatitude": { "gco:Decimal": "45.1387" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2016-01-01",
                    "gml:endPosition": "2016-08-04"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): Other,GWF. For further information: https://www.sciencedirect.com/science/article/pii/S2215016118301729" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-14" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13030_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-14" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13030" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Impact of non-growing season freeze-thaw conditions on nutrient cycling and Fall-applied fertilizers" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-14" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Rezanezhad, Fereidoun" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Krogstad, Konrad" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Vandergriendt, Marianne " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "pointOfContact",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "pointOfContact"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Hug, Laura " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Jensen, Grant " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rudolph, David " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Cappellen, Philippe " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Rezanezhad, F., Krogstad, K., Hug, L., Jensen, G., Rudolph, D., Van Cappellen, P., and Vandergriendt, M. (2019). Impact of non-growing season freeze-thaw conditions on nutrient cycling and Fall-applied fertilizers. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Four soil columns were packed with sieved agricultural soil collected from the rare Charitable Research Reserve located in Cambridge, Ontario. The lower sections of the soil columns were wrapped with band heaters to simulate a realistic soil profile vertical temperature gradient. Fertilizer was applied to two of the soil columns. The  soil columns were placed in a controlled temperature chamber and exposed to a non-growing season temperature and precipitation model for fifty-five days. Column leachate was collected and analyzed using non-purgeable organic carbon and total nitrogen analysis, inductively coupled plasma optical emission spectrometry, and ion chromatography. Leachate, pH, and electric conductivity were also measured. All samples collected have been analysed in the Ecohydrology Research Group Laboratory at the University of Waterloo." },
        "gmd:purpose": { "gco:CharacterString": "Increased winter temperatures caused by climate warming may expose soils to colder temperatures and more freeze-thaw events. Freeze-thaw cycles influence chemical, biological, and physical soil properties that control carbon and nutrient cycling and microbial activity. Changes to these processes may impact nutrient export from affected soils, possibly altering soil health and nearby water quality. Determining these impacts to geochemical cycling and microbial activity will provide insight into the efficacy of pre-winter fertilizer applications and improve our conceptual and quantitative understanding of shallow subsurface biogeochemical processes.  Thus, the overall aim of this research project is to assess the mechanisms of soil biogeochemical processes under variable freeze-thaw cycles  and soil moisture content conditions, and determine the effects on carbon and nutrient cycling under variable snow cover and winter conditions.<br/>This data set is created to support the project titled \"Winter Soil Processes in Transition\", which is Pillar 1-2 project under the Global Water Futures Program funded by Canada First Research Excellence Fund" },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Biogeochemistry" },
                { "gco:CharacterString": "Carbon fluxes" },
                { "gco:CharacterString": "Freeze-up" },
                { "gco:CharacterString": "Nitrogen" },
                { "gco:CharacterString": "Nutrient cycling" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "pH" },
                { "gco:CharacterString": "Soils" },
                { "gco:CharacterString": "Soil temperature" },
                { "gco:CharacterString": "Water chemistry" },
                { "gco:CharacterString": "Water quality" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-14" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "rare Charitable Research Reserve, Cambridge, Ontario - FANXK" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.3850468" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-80.3850468" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.3837007" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.3837007" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-10-23",
                    "gml:endPosition": "2019-03-30"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: kjkrogstad@uwaterloo.ca (Krogstad, Konrad, University of Waterloo)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-14" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13029_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-18" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13029" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Developing nutrient load-response relationships for total and dissolved reactive phosphorus for the three major tributaries to Lake St. Clair: Thames, Sydenham and Clinton rivers" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-18" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Van Cappellen, Philippe " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Bocaniov, Serghei" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Scavia, Don" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Van Cappellen, P., Bocaniov, S., and Scavia, D. (2019). Developing nutrient load-response relationships for total and dissolved reactive phosphorus for the three major tributaries to Lake St. Clair: Thames, Sydenham and Clinton rivers. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "This data set was developed in order to understand the role of Lake St. Clair (USA–Canada) in modulating phosphorus loads. Specifically, this research will provide information on the simulated retention of nutrients (total and soluble reactive phosphorous) during ice-free period (March 1 to October 31) in 2009 in Lake St. Clair. We will use a three-dimensional coupled hydrodynamic and biogeochemical model (ELCOM-CAEDYM). The hydrodynamic model is an Estuary, Lake and Coastal Ocean Model (ELCOM). The biogeochemical model is a Computational Aquatic Ecosystem Dynamics Model (CAEDYM). The model was calibrated and validated in its previous application to Lake St. Clair (More details on model calibration and validation can be found in Bocaniov and Scavia, 2018: Water Resources Research, 54, 3825-3840; https://doi.org/10.1029/2017WR021876). We will use this model to simulate the transport and retention of nutrients and construct the tributary-specific load-response relationships. We will also look at the mechanisms responsible for retention of nutrients such as settling and re-suspension." },
        "gmd:purpose": { "gco:CharacterString": "The main aim of this research is to understand the within-lake dynamics, transport, and retention of nutrients, particularly total and soluble reactive phosphorous, in Lake St. Clair. Specifically, this study will investigate the effects of Lake St. Clair in modulating nutrient loads from its three major tributaries: Thames, Sydenham and Clinton rivers. Note, that this data set will support the project titled \"Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "completed",
            "-codeSpace": "ISOTC211/19115",
            "#text": "completed"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Lake" },
                { "gco:CharacterString": "Models" },
                { "gco:CharacterString": "Nutrient availability" },
                { "gco:CharacterString": "Nutrients" },
                { "gco:CharacterString": "Phosphorus" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-18" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Lake St. Clair, USA–Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-83" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-82.33" },
                "gmd:southBoundLatitude": { "gco:Decimal": "42.25" },
                "gmd:northBoundLatitude": { "gco:Decimal": "42.75" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2009-03-01",
                    "gml:endPosition": "2009-10-09"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Bocaniov, Serghei (University of Waterloo; sbocanio@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-18" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13027_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-19" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13027" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Vegetation diversity of valley bottom peatlands in the Upper Bow River Basin in Alberta, Canada. " },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-19" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rooney, Rebecca " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Lei, Calvin " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Bolding, Matthew " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Pearson, Jessie " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Reynolds, Jordan " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Streich, Stephanie" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Rooney, R., Lei, C., Bolding, M., Pearson, J., Reynolds, J., Streich, S. (2019). Vegetation diversity of valley bottom peatlands in the Upper Bow River Basin in Alberta, Canada. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Three 50m transects perpendicular to stream flow are established to capture changes along a hydrologic gradient. Quadrats are placed 10m apart, for a total of 5 quadrats along the transect. Percent cover data for vascular plants and bryophytes at each quadrat is surveyed independently by two surveyors, and then a second time together to reduce sampling and detection errors. The transects are walked by two surveyors at opposite ends to characterize shrub and tree vegetation as encountered, then repeated together to reduce sampling and detection errors. Covariate data (pH, conductivity, water samples for stable isotope analysis and sediment profiles) are taken to complete the site characterization." },
        "gmd:purpose": { "gco:CharacterString": "The main goal of this research project is to characterize the vegetation diversity in mountain peatlands, since vegetation is a great indicator of wetland health due to its sensitivity to variation in environmental conditions. This data set provides species richness and percent cover data of vascular plants and bryophytes identified, to species level surveyed from one meter quadrats. Redundancies were employed to reduce sampling bias in percent cover estimates, and reduce the likelihood of missed species identifications. It also characterizes shrub and tree canopies, and canopy characteristics along several transects located in the Elbow, Ghost, and Jumping Pound Watersheds in the Upper Bow Basin in Alberta Canada. <br/><br/>This data set is collected for the project titled â€œFuture Water for the Mountain West\", which is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Abundance" },
                { "gco:CharacterString": "Biodiversity" },
                { "gco:CharacterString": "Bryophytes" },
                { "gco:CharacterString": "Canada" },
                { "gco:CharacterString": "Conductivity" },
                { "gco:CharacterString": "Isotopes" },
                { "gco:CharacterString": "Land cover" },
                { "gco:CharacterString": "Moss" },
                { "gco:CharacterString": "Peatland" },
                { "gco:CharacterString": "pH" },
                { "gco:CharacterString": "River" },
                { "gco:CharacterString": "Sediments" },
                { "gco:CharacterString": "Transect" },
                { "gco:CharacterString": "Vegetation" },
                { "gco:CharacterString": "Water" },
                { "gco:CharacterString": "Wetland" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-19" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Upper Bow Basin in Alberta, Canada." },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-115.398726" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-114.780684" },
                "gmd:southBoundLatitude": { "gco:Decimal": "50.778609" },
                "gmd:northBoundLatitude": { "gco:Decimal": "51.421386" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-07-28",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Rooney, Rebecca (University of Waterloo rrooney@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-19" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13026_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-15" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13026" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Significance of groundwater dynamics within hydrologic models in Alder Creek, Grand River Watershed, Ontario  " },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-15" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Illman, Walter " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Tong, Xin" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Illman, W., and Tong, X. (2019). Significance of groundwater dynamics within hydrologic models in Alder Creek, Grand River Watershed, Ontario. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "A  high-resolution, 3D, transient numerical model of the Alder Creek watershed using HydroGeoSphere, a fully-integrated 3D hydrologic flow and contaminant transport mode will be developed. The lithology information from borehole logs and topography data at Alder Creek will be used to construct a geologic model and then to construct a three-dimensional grid. Layer information identified in the constructed geological model will then be introduced to the grid to generate the 3D groundwater flow model. The hydraulic head data will be used as initial condition and well installation, pumping/injection records, precipitation, evapotranspiration will be used as boundary condition. The constructed hydrologic model will be used to investigate the groundwater dynamics on watershed, and also to be parameterized, calibrated, and validated." },
        "gmd:purpose": { "gco:CharacterString": "The main objective of this research project is to examine the significance of shallow/deep groundwater flow including the unsaturated zone on surface water flow predictions within the Alder Creek Watershed located in the Grand River Basin using high resolution numerical model simulations.  This project is supported by  the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Contaminants" },
                { "gco:CharacterString": "Groundwater" },
                { "gco:CharacterString": "Hydrology" },
                { "gco:CharacterString": "Meteorological" },
                { "gco:CharacterString": "Modeling" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Precipitations" },
                { "gco:CharacterString": "Soil moisture" },
                { "gco:CharacterString": "Stream" },
                { "gco:CharacterString": "Surface water runoff" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-15" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Alder Creek Watershed, Grand River Basin, Ontario" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.634" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-80.49" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.313" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.452" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2019-01-04",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Illman, Walter (University of Waterloo, willman@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-15" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13025_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-14" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13025" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Relationship between water quality and investment made into phosphorus reduction, Thames River watershed, Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-14" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Brouwer, Roy " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Frank, Ana" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Brouwer, R., and Frank, A. (2019). Relationship between water quality and investment made into phosphorus reduction, Thames River watershed, Ontario. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "The primary focus of this research is to determine the effectiveness of investments made into the watershed, based on the achieved phosphorus loads reductions. Daily discharges were retrieved from the Hydrometric Data (HYDAT) database, provided by the Water Survey of Canada, Environment and Climate Change Canada (WSC-ECCC). The Ontario Ministry of the Environment, Conservation and Parks (MOECP) provided the Provincial Water Quality Monitoring Network (PWQMN) data. Census data for population and livestock were obtained from Statistics Canada in periods of 10 years. A systematic review of the environmental programs’ archive was conducted — the origins of the archive website dates back to 1995. This archive is created and maintained by Bruce Bowman, creator of the Canada-Ontario Agriculture Green Plan website (http://agrienvarchive.ca/gp/gphompag.html). This archive includes fifteen major environmental programs related to the reduction of pollution in the Great Lakes Basin in the period 1970 - 2000. There are a total of 1044 available documents in the archive, and contains material from technical to project financial reports and summary analyses. Loadings are calculated on a yearly basis (i.e., from January 1 through December 31 of the current year). Phosphorus loadings from the non-point sources were generated in the watershed, and is estimated using fertilizer consumption, livestock production, and population count in each census area for each census year in the Thames River Watershed. Loading rate (mass per time) is estimated as the product of a concentration (mass per unit volume) and a flow rate (volume per unit time)." },
        "gmd:purpose": { "gco:CharacterString": "The purpose of this research is to better understand which beneficial management and water management practices are feasible and make good business sense for decision makers. This study has two main questions: (1) What soil and water management practices can grain farmers use to improve productivity by optimising the use of available moisture? (2) How feasible (financially, technically, etc.) are these practices in today’s farming environment? This dataset will facilitate improved understanding of the relationship of investment made into Thames River watershed phosphorus reduction and water quality of the river. Specifically, this data set will provide information on the number of investments made since the 1970s and dynamics of change in phosphorus loads. This data set is collected to support the project titled \"Agricultural Water Futures in Canada: Stressors and Solutions – Work package 3\". Agriculture Water Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund" },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Archive" },
                { "gco:CharacterString": "Economic value" },
                { "gco:CharacterString": "Financial resources" },
                { "gco:CharacterString": "Funding" },
                { "gco:CharacterString": "Management" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Phosphorus" },
                { "gco:CharacterString": "Populations" },
                { "gco:CharacterString": "River" },
                { "gco:CharacterString": "Water quality" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-14" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Thames River Watershed, Ontario, Canada - FCVOV" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-82.454167" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-81.2572222" },
                "gmd:southBoundLatitude": { "gco:Decimal": "42.319167" },
                "gmd:northBoundLatitude": { "gco:Decimal": "42.9816667" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "1972-01-01",
                    "gml:endPosition": "2016-12-27"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Frank, Ana (anna.frank@uwaterloo.ca, University of Waterloo)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-14" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13024_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-07" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13024" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Satellite-based lake surface temperature, chlorophyll-a and ice concentration observations in Lake Erie and Lake Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-07" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Cappellen, Philippe " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Kheyrollah Pour, Homa" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Van Cappellen, P., and Kheyrollah Pour, H. (2019). Satellite-based lake surface temperature, chlorophyll-a and ice concentration observations in Lake Erie and Lake Ontario. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "To assess and unravel the changes that affect lentic ecosystems, long-term data-series are of paramount importance. The need for more effective environmental monitoring has led to notable advances in satellite technology and algorithm development, including enhanced ocean color sensor data acquisition capabilities to detect and map phytoplankton blooms with adequate spatial and temporal resolution. SENTINEL-3 OLCI instrument (OLCI) has a spatial resolution of 300 m over coastal zones and provides equivalent precision and accuracy as MEdium Resolution Imaging Spectrometer (MERIS) satellite images with 1-2 days repeat coverage. OLCI has 6 spectral bands (21 bands, visible and infrared) more than MERIS, allowing for better cloud screening enhanced atmospheric corrections, and discrimination of water, land and atmospheric changes in temporal data series. The MODerate-resolution Imaging Spectroradiometer (MODIS) captures data in 36 spectral bands ranging in wavelength from 0.4 μm to 14.4 μm and at varying spatial resolutions (2 bands at 250 m, 5 bands at 500 m and 29 bands at 1 km). ERA5, is the climate reanalysis dataset from European Centre for Medium-Range Weather Forecasts (ECMWF), which is substantially upgraded in comparison with ERA-Interim with a spatial grid resolution of 0.25 degree (~31 km) and hourly temporal resolution, 137 vertical levels of the atmosphere and increased amount of assimilated data using 4DVar data assimilation method. The variables used in this study are cloud cover (0-1), precipitation (mm), evaporation (mm), and runoff (mm) for the period of 2002-2017." },
        "gmd:purpose": { "gco:CharacterString": "Nuisance and harmful algal blooms represent a major, and growing, threat to water security across Canada and the world, because of their undesirable ecological, economic, and health impacts. This project aims to strengthen the predictive understanding and forecasting of the timing, spatial extent and intensity of algal blooms in large lakes of the cold temperate to subarctic climate zone. We will (1) perform statistical analyses of the environmental factors that control the occurrence of algal blooms in Lake Erie and Lake Ontario using 30 years of monitoring data (http://desc.ca/programs/iwr), and (2) test the performance of data-driven probabilistic models for seasonal and inter-annual forecasting of algal blooms. <br/><br/>Note, that this research is part of the “Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds: Work Package 2\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Algal bloom" },
                { "gco:CharacterString": "Atmosphere" },
                { "gco:CharacterString": "Chlorophyll" },
                { "gco:CharacterString": "Clouds" },
                { "gco:CharacterString": "Ecology" },
                { "gco:CharacterString": "Human health" },
                { "gco:CharacterString": "Ice" },
                { "gco:CharacterString": "Lake Erie" },
                { "gco:CharacterString": "Lake Ontario" },
                { "gco:CharacterString": "Monitoring" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Phytoplankton" },
                { "gco:CharacterString": "Precipitations" },
                { "gco:CharacterString": "Remote sensing data" },
                { "gco:CharacterString": "Satellite imagery" },
                { "gco:CharacterString": "Surface water runoff" },
                { "gco:CharacterString": "Temperature" },
                { "gco:CharacterString": "Water" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-07" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Lake Erie and Lake Ontario" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-83.5132874" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-75.8" },
                "gmd:southBoundLatitude": { "gco:Decimal": "41.4047633" },
                "gmd:northBoundLatitude": { "gco:Decimal": "44.7288366" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2002-05-01",
                    "gml:endPosition": "2017-12-24"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Homa Kheyrollah Pour (h2kheyro@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-07" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13023_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-06" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13023" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "17E DNAzyme as a general divalent metal sensor " },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-06" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Liu, Juewen " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Moon, Woohyun " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Huang, Po-Jung Jimmy" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Smith, Scott" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Liu, J., Moon, W., Huang, P., and Smith, S. (2019). 17E DNAzyme as a general divalent metal sensor. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "DNAzymes activities, with various metal ions, are tested in different conditions (such as concentration, pH, buffer, salt, presence/absence of oxygen), to understand the sensor system, and to improve the specificity and detection limit. The results are analyzed using denaturing polyacrylamide gel electrophoresis, and the signals from fluorescent dyes are imaged and analyzed to characterize the experiment conditions." },
        "gmd:purpose": { "gco:CharacterString": "The purpose of this research project is to develop new biosensor for metal ions for water samples and to understand the effect of dissolved organic matters (DOM) on the biosensor. In particular, the biosensors are based on catalytically active DNA molecules (DNAzymes) that require specific metal ions for activity. This work will test a DNAzyme, that is 17E, for its use as a general metal sensor for common transition metal ions and the DOM effect. In addition, we are selecting new DNAzymes that are specific to important metals such as Ni2+. This work is conducted in collaboration with Dr. Scott Smith from Wilfrid Laurier University. <br/><br/>This data set is collected for the project titled â€œSensor and Sensing Systems for Water Quality Monitoring\", which is a Pillar 2 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Chemistry" },
                { "gco:CharacterString": "Dissolved organic carbon (DOC)" },
                { "gco:CharacterString": "DNA" },
                { "gco:CharacterString": "Ions concentration" },
                { "gco:CharacterString": "Metals" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Water chemistry" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-06" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Bionanotechnology and Interfaces Laboratory (Juewen Liu Labs), University of Waterloo, Waterloo, Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.5442312" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-80.5442312" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.4711396" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.4711396" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-05-04",
                    "gml:endPosition": "2019-04-25"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Liu, Juewen (liujw@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-06" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13022_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-05" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13022" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Oxygen Optode Data from Field Test at Elora Research Station, Guelph, Ontario " },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-05" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Cappellen, Philippe " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Milojevic, Tatjana " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Mao, Alison " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rezanezhad, Fereidoun " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Van Cappellen, P., Milojevic, T., Mao, A., and Rezanezhad, F. (2019). Oxygen Optode Data from Field Test at Elora Research Station, Guelph, Ontario. Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "This data set includes a time series of the light intensity (a.u.) and oxygen concentration (specified in % saturation or mol/L) measured by 8 fibre opode sensors installed in 2 lysimeters (4 sensors in each lysimeter), one with sandy soil (L1), another with silty soil (L2), in an agricultural field site in Elora, Ontario. The sensor readings correspond to the following depths (relative to the soil surface): 5 cm, 10 cm, 30 cm, and 60 cm. One image is taken every three hours and captures values for all eight sensors simultaneously.<br/><br/>The data collected is in the form of digital images taken with a DSLR camera. The raw data includes the unprocessed images (.CR2 files). Each image is processed using freely available ImageJ software and analyzed for the average light intensity (a.u.) of each sensor spot in the image. In addition to the raw images, the processed values of average light intensity are included in an excel file. The light intensity must then be converted into an oxygen concentration, based on the Stern-Volmer equation and sensor calibration results." },
        "gmd:purpose": { "gco:CharacterString": "The aim of this project is to build on existing research, which resulted in the development of a low-cost, lab-based fibre optic oxygen sensor for monitoring oxygen in soils and sediments. The field system was built in collaboration with an industrial partner, Hoskin Scientific, who developed the optical detection and electrical control units for the sensor system. <br/><br/>In the GWF program, the unit will be tested under field conditions, through deployment at the University of Guelphâ€™s Elora Research Station, in Southern Ontario, in collaboration with the University of Guelph researchers. The optode data being collected will be used for evaluating the sensor performance under field conditions and for an improved understanding of soil oxygen dynamics given the seasonal variations in an agricultural field site.<br/><br/>Note that the initial sensor development was funded by the Canada Excellence Research Chair (CERC) program (CERC Ecohydrology), while the field sensor development was in partnership with Hoskin Scientific through an NSERC Engage Grant. The data set here will support the project titled \"Sensors and Sensing Systems for Water Quality Monitoring\", which is a Pillar 1 project under the Global Water Futures Program (GWF) funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Image analysis" },
                { "gco:CharacterString": "Oxygen" },
                { "gco:CharacterString": "Sediments" },
                { "gco:CharacterString": "Soils" },
                { "gco:CharacterString": "Temperature" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-05" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Elora Research Station, Guelph, Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.3819444444444" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-80.3819444444444" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.6374722" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.6374722" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-09-26",
                    "gml:endPosition": "Undefined"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: A low-cost sensor design for monitoring oxygen in soils and sediments is being tested at monitored field site in Southern Ontario. The sensor was developed to quantify the dynamics of oxygen in soil environments, which can provide useful information for researchers trying to understand biogeochemical conditions and processes in soil. This sensor was built to monitor soil oxygen in the gaseous and dissolved phase and under varying temperature conditions, including sub-zero conditions. This data is being collected as part of the Global Water Futures (GWF) project on Sensors and Sensing Systems for Water Quality Monitoring project and focuses on the field testing of the sensor. Research Program(s): Other,GWF. For further information: Van Cappellen, Philippe (University of Waterloo, pvc@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-05" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13021_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-25" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13021" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Characterizing temporal and spatial changes to the soil microbiome through the winter transition and freeze-thaw cycles in agricultural fertilizer amended soils" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-25" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Hug, Laura" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Jensen, Grant" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Krogstad, Konrad" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rezanezhad, Fereidoun" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Hug, L., Jensen, G., Krogstad, K., and Rezanezhad, F. (2019). Characterizing temporal and spatial changes to the soil microbiome through the winter transition and freeze-thaw cycles in agricultural fertilizer amended soils. Waterloo, Canada: Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Agricultural soil from the rare Charitable Research Reserve, located in Cambridge, Ontario, was homogenized and used to pack four soil columns. Laboratory controlled conditions allowed for dynamically simulating a climate model of the winter transition months to a period of 55 days, including adjustments to temperature and precipitation. Insulation of the columns allowed for realistic simulation of the natural soil temperature gradient across depth and time. Two of the columns were amended with fertilizer while two were left as controls. This setup allowed for high resolution temporal and spatial soil sampling for high-throughput sequencing of microbial diversity (16S and ITS rRNA amplicon sequencing) for characterization of the changes to unique bacterial, archaeal, and fungal populations. Further adenosine triphosphate concentrations from the soil samples allowed for tracking of microbial activity over the course of the experiment. Changes to the microbiome are analyzed as a function of the changing geochemical properties and nutrient composition of the soil measured in collaboration with the Ecohydrology Research Group Laboratory at the University of Waterloo." },
        "gmd:purpose": { "gco:CharacterString": "Largely overlooked, microbial activity in soil persists under snow and ice throughout the winter transition and reaches its apex during thaw events. With the onset of climate change the active layer of soils will experience colder temperatures as it loses its snowpack insulation and consequently will undergo a higher frequency of freeze-thaw cycles. These changes will have downstream effects on the underlying geochemistry of soils and subsequently microbial composition and activity. The result leave unclear implications for the study of climate change, agricultural management, and biogeochemical cycling. Thus the objective of this research is to characterize the changes in microbial diversity and bioenergetics as a function of the changing environmental metrics of soil geochemistry and nutrient availability throughout the winter transition. Further the efficacy of pre-winter fertilizer amendments will be explored from concerns of decreasing potency as thaw events may allow for early onset microbial growth and consumption of the fertilizer. The data contained here is pursuant to the “Winter Soils Processes in Transition” project under the broader Global Water Futures program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Bacteria" },
                { "gco:CharacterString": "Biogeochemistry" },
                { "gco:CharacterString": "Fungi" },
                { "gco:CharacterString": "Genetic analysis" },
                { "gco:CharacterString": "Nutrient cycling" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Soil microbiology" },
                { "gco:CharacterString": "Soils" },
                { "gco:CharacterString": "Soil temperature" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-25" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "rare Charitable Research Reserve, Cambridge, Ontario, Canada - FANXK" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.3850468" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-80.3850468" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.3837007" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.3837007" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-10-23",
                    "gml:endPosition": "2019-05-01"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Hug, Laura (laura.hug@uwaterloo.ca, University of Waterloo)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-25" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13007_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-05" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13007" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Meteorological, stream, and groundwater data in the Alder Creek Observatory, Southwest Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-05" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rudolph, David " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": " Wiebe, Andrew" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Rudolph, D., and Wiebe. A. (2019) Meteorological, stream, and groundwater data in the Alder Creek Observatory, Southwest Ontario. Waterloo, Ontario: Canadian Cryospheric Information Network (CCIN). Unpublished Data. <br/><br/>Alternate Data Citation: Wiebe, A., and Rudolph, D. (2019). Meteorological, stream, and groundwater data in the Alder Creek watershed, SW Ontario. Waterloo, Ontario, Canada: Southern Ontario Water Consortium (SOWC). Unpublished data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Field data were collected from electronic instruments deployed in the watershed, as well as via manual measurements. Seven weather stations were deployed in and around the Alder Creek Watershed that included instruments for the measurement of rainfall and snow depths, and for recording parameters required to estimate reference evapotranspiration (air temperature, relative humidity, incoming solar radiation, and wind speed). Several single and multi-port wells were installed near the weather stations. Two recharge stations were set up to monitor soil moisture changes and water table fluctuations over time. Each consisted of a network of shallow wells and infrastructure for measuring soil moisture both electronically and via neutron probe. One of these stations was designed to assess groundwater-surface water interaction and depression-focused recharge during extreme/large-magnitude hydrological events. Stream monitoring included: manual water sampling; testing of automated water sampling using event triggers; measurement of water levels and temperatures; manual measurement of pH, temperature, dissolved oxygen, electrical conductivity; development of streamflow rating curves; and automated nitrate concentration monitoring. Field sites were chosen based on an attempt to distribute measurement locations spatially throughout the watershed, and on permissions obtained from local residents and stakeholders (e.g., Region of Waterloo) for installations. Computer modelling of the Alder Creek watershed has been conducted using some of the field data. Two different modelling codes were used to estimate recharge rates and event responses within the watershed. One aspect of this work involved simulating the magnitude and spatial variability of recharge rates based on rainfall variability measured at the weather stations. Another aspect considered how depression-focused recharge could influence well vulnerability during hydrological events." },
        "gmd:purpose": { "gco:CharacterString": "The main objective of this project was to instrument the Alder Creek watershed with sensors and telemetry in order to collect near real-time hydrological data for monitoring the impacts of urbanization and land use change within a critical area for municipal water supply. The goal of the Southern Ontario Water Consortium (SOWC) was to set up a platform for research, development, testing, and demonstration of new sensors, data processing technology, and services. Alder Creek was instrumented as one of several field observatories, and it represented the middle member of three subwatersheds along a continuum from rural/agricultural (Hopewell Creek) to fully urbanized (Mimico Creek, Toronto). Foci within the project included hydrological data collection and data management. Field data such as meteorological, stream, and groundwater observations were recorded. Near real-time transmission of these data, via cellular network telemetry to an Online data platform (IBM's Intelligent Operations for Water), for display and data analytics, was a complementary aim. Concerns regarding the vulnerability of municipal supply wells to microbial and non-point source contamination, especially under the conditions of extreme hydrological events, were drivers of this work. <br/><br/>Note that this project was started within the Watershed Node of the Southern Ontario Water Consortium (SOWC; www.sowc.ca) and funded by the Federal Economic Development Agency of Canada (FedDev) and the Ontario Ministry of Economic Development and Innovation (MEDI). This data set  will also support the project titled \"Transformative sensor Technologies and Smart Watersheds (TTWS): Work Package 1\". TTWS is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Air temperature" },
                { "gco:CharacterString": "Groundwater" },
                { "gco:CharacterString": "Humidity" },
                { "gco:CharacterString": "Hydrology" },
                { "gco:CharacterString": "Meteorological" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Precipitations" },
                { "gco:CharacterString": "Snow" },
                { "gco:CharacterString": "Soil moisture" },
                { "gco:CharacterString": "Solar radiation" },
                { "gco:CharacterString": "Stream" },
                { "gco:CharacterString": "Watershed" },
                { "gco:CharacterString": "Water supply" },
                { "gco:CharacterString": "Wind speed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-05" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Alder Creek Watershed, Grand River Basin, Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-80.634" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-80.49" },
                "gmd:southBoundLatitude": { "gco:Decimal": "43.313" },
                "gmd:northBoundLatitude": { "gco:Decimal": "43.452" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2012-12-19",
                    "gml:endPosition": "2019-04-27"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): Other,GWF. For further information: Rudolph,David  (University of Waterloo, drudolph@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-05" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13006_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-03-05" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13006" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Ground Water Discharge and Permafrost Thaw Data using Remote Sensing and Geophysical and Numerical Techniques in the Central Mackenzie Valley, Northwest Territories" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-03-05" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rudolph, David " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Glass, Brittney " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Wicke, Andrew " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Rudolph, D., Glass, B., and Wicke, A. (2019). Ground Water Discharge and Permafrost Thaw Data using Remote Sensing and Geophysical and Numerical Techniques in the Central Mackenzie Valley, Northwest Territories. Waterloo, Ontario: Canadian Cryospheric Information Network (CCIN). Unpublished Data. <br/><br/>Additional Citation: Brittney Glass (2019). Examining Hydrogeological Processes in Freezing Soils using Remote Geophysical and Numerical Techniques. UWSpace. http://hdl.handle.net/10012/14466" }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "Landsat 4-5 Thematic Mapper (TM) imagery from 2004, 2009, and 2016, as well as RapidEye-3 imagery from 2017, was used to identify surface icings in the CMV. Icings are ice lenses which form on the land surface during the winter as a result of groundwater discharge. Icings may be of a permanent or intermittent type. A series of image algorithms were applied to the data to extract the location of icings, which are then used as an indicator of groundwater discharge. Recurring icings from the 4 sampled years were then computed using an intersection. <br/>RapidEye-3 imagery from 2011-2017 was used to identify regions of continually degrading vegetation using biomass indices. Two year pairs (e.g. 2011-2012, 2012-2013, etc.) were compared to find intersecting pixels of degrading vegetation, and then ‘negative’ change pixels were extracted from the imagery. The negative change pixels from each two year-pair were then compared to find areas which have been continually degrading since 2011. Comparing images in this way partially eliminates effects of seasonality. The identified regions were compared to in-situ thermistor data collected by Husky Oil at several monitoring stations, and the results were well correlated." },
        "gmd:purpose": { "gco:CharacterString": "The first goal of this project was to utilize remote geophysical imagery to identify groundwater (GW) discharge zones in the Central Mackenzie Valley (CMV) of the Northwest Territories. The CMV is a proposed shale oil development region and, is therefore, vulnerable to environmental degradation and surface/groundwater contamination, associated with hydraulic fracturing. Determining locations of groundwater discharge at the surface provides information about potential pathways with which contamination could reach the surface. Additionally, characterizing groundwater discharge locations also contributes to a better overall understanding of the region’s hydrogeology. This work was able to successfully utilize remotely sensed optical and thermal data to identify recurring groundwater discharge zones and their relative sizes. <br/><br/>The second goal of this work was to identify regions of continually degrading vegetation within the CMV. Degraded vegetation represents areas where permafrost may be thawing, as it creates saturated subsurface conditions, in which most tree species cannot survive. Indigenous groups living in the CMV rely on traditional hunting and gathering methods to sustain their communities. Degrading forest cover, therefore, has significant impacts on the sustainability of these communities. Additionally, thawing permafrost plays an important role in the region’s hydrologic cycle, and should be understood in greater detail. This work was able to identify vegetated regions which have been continually degrading since 2011; the results were in agreement with in-situ permafrost monitoring data.<br/><br/>This data set is collected for the project titled “Transformative sensor Technologies and Smart Watershed(TTWS): Work Package 1\". TTWS a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "completed",
            "-codeSpace": "ISOTC211/19115",
            "#text": "completed"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Contaminants" },
                { "gco:CharacterString": "Groundwater" },
                { "gco:CharacterString": "Ice" },
                { "gco:CharacterString": "Landsat image" },
                { "gco:CharacterString": "Mackenzie River" },
                { "gco:CharacterString": "Northwest Territories" },
                { "gco:CharacterString": "Permafrost" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-03-05" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Central Mackenzie Valley, Northwest Territories, Canada; <br/>Bogg Creek Watershed, Northwest Territories, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-126.9" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-125.6" },
                "gmd:southBoundLatitude": { "gco:Decimal": "64.9" },
                "gmd:northBoundLatitude": { "gco:Decimal": "65.3" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2011-08-01",
                    "gml:endPosition": "2018-05-28"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Rudolph, David ( University of Waterloo, drudolph@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-03-05" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13005_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-25" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13005" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Nutrient legacies in Maumee River Watershed in Ohio, USA" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-25" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Basu, Nandita " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Malik, Lamisa " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Basu, N., and Malik, L. (2019). Nutrient legacies in Maumee River Watershed in Ohio, USA. Waterloo, Canada: Canadian Crysohperic Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "The water quality data for downstream of Maumee River (Waterville station) has been collected from the National Center for Water Quality Research housed at the Heidelberg University. Data obtained from United States Census Bureau websites include; population of county, detergent use, fertilizer use, land use, crop area, and livestock count. These data have been used as inputs for the parsimonious model." },
        "gmd:purpose": { "gco:CharacterString": "The goal of this research is to focus on the long-term effect of nutrient contamination in Lake Erie, and its surrounding waters (watersheds?). Particular emphasis will be placed on the Maumee watershed in Ohio, as it is the biggest contributing watershed to Lake Erie (approximately 60%). The parsimonious model will be used to determine long-term total phosphorus loading trajectories in the Maumee Watershed. <br/><br/>This data set is collected for the project titled “Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds - Work Package 1\". Lake Futures is a Pillar 3 project under the Global Water Futures (GWF) Program funded by the Canada First Research Excellence Fund (CFREF)." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Biogeochemistry" },
                { "gco:CharacterString": "Contaminants" },
                { "gco:CharacterString": "Hydrology" },
                { "gco:CharacterString": "Lake Erie" },
                { "gco:CharacterString": "Nutrients" },
                { "gco:CharacterString": "Phosphorus" },
                { "gco:CharacterString": "River" },
                { "gco:CharacterString": "Water quality" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-25" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Maumee Watershed, Lake Erie Basin, Ohio, USA" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-83.701163862" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-83.701163862" },
                "gmd:southBoundLatitude": { "gco:Decimal": "41.692997228" },
                "gmd:northBoundLatitude": { "gco:Decimal": "41.692997228" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "1980-01-01",
                    "gml:endPosition": "2016-12-30"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Basu, Nandita, University of Waterloo (nandita.basu@uwaterloo.ca)" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-25" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13000_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-02-25" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13000" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "Trophic ecology of walleye in the southern Grand River, Ontario" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-02-25" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Servos, Mark" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Quinn-Austin, Hillary " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "MacDougall, Tom" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Rooney, Rebecca " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://nap.geogratis.gc.ca/metadata/register/napMetadataRegister.xml#IC_90",
                      "-codeListValue": "ri_419",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Collaborator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Servos, M., Quinn-Austin, H., MacDougall, T., and Rooney, R. (2019). Trophic ecology of walleye in the southern Grand River, Ontario. Canadian Cryospheric Information Network (CCIN). Unpublished Data." }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "The stable isotope signatures of walleye will be analyzed to compare food web structure, at different sites above and below the Dunnville dam, located in southern Grand River. The lengths and weights of walleye will be measured to compare the condition factor of walleye at different sites above and below the Dunnville dam. Walleye were caught in the southern Grand River at three sites using a boat electrofisher, and their lengths and weights were measured on shore using a ruler and a scale respectively. Muscle tissue samples for future stable isotope analysis were also collected on shore. Stable isotope signatures (that is delta15N and delta13C) will be measured using mass spectrometry at the University of Waterloo Environmental Isotope Lab." },
        "gmd:purpose": { "gco:CharacterString": "The purpose of this research is to better develop end points, related to the protection of the valued ecosystem components, in the southern Grand River watershed. We are examining the life cycle parameters of walleye, to better develop and interpret biomonitoring endpoints. <br/><br/>This data set is collected for the project titled “Lake Futures: Enhancing Adaptive Capacity and Resilience of Lakes and Their Watersheds: Work Package 3\". Lake Futures is a Pillar 3 project under the Global Water Futures Program funded by Canada First Research Excellence Fund. This researcher is co-supervised by Drs. Mark Servos and Rebecca Rooney." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "underDevelopment",
            "-codeSpace": "ISOTC211/19115",
            "#text": "underDevelopment"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Ecology" },
                { "gco:CharacterString": "Ecosystem" },
                { "gco:CharacterString": "Environmental impacts" },
                { "gco:CharacterString": "Fisheries" },
                { "gco:CharacterString": "Food web" },
                { "gco:CharacterString": "Isotopes" },
                { "gco:CharacterString": "Life history" },
                { "gco:CharacterString": "Ontario" },
                { "gco:CharacterString": "Trophic dynamics" },
                { "gco:CharacterString": "Watershed" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-02-25" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Southern Grand River, Ontario, Canada" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-79.858951" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "-79.576004" },
                "gmd:southBoundLatitude": { "gco:Decimal": "42.857581" },
                "gmd:northBoundLatitude": { "gco:Decimal": "42.942317" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2018-09-16",
                    "gml:endPosition": "2020-04-28"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: Servos, Mark (University of Waterloo mservos@uwaterloo.ca) " }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-02-25" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
},
{
  "gmd:MD_Metadata": {
    "-xmlns:gss": "http://www.isotc211.org/2005/gss",
    "-xmlns:gts": "http://www.isotc211.org/2005/gts",
    "-xmlns:gml": "http://www.opengis.net/gml",
    "-xmlns:xlink": "http://www.w3.org/1999/xlink",
    "-xmlns:gco": "http://www.isotc211.org/2005/gco",
    "-xmlns:gmd": "http://www.isotc211.org/2005/gmd",
    "-xmlns:functx": "http://www.functx.com",
    "-xmlns:gmi": "http://www.isotc211.org/2005/gmi",
    "-xmlns:gmx": "http://www.isotc211.org/2005/gmx",
    "-xmlns:gsr": "http://www.isotc211.org/2005/gsr",
    "-xmlns:srv": "http://www.isotc211.org/2005/srv",
    "-xmlns": "http://www.isotc211.org/2005/gmi",
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xsi:schemaLocation": "http://www.isotc211.org/2005/gmd http://www.isotc211.org/2005/gmd/gmd.xsd",
    "gmd:fileIdentifier": { "gco:CharacterString": "13079_iso.xml" },
    "gmd:language": { "gco:CharacterString": "eng; CAN" },
    "gmd:characterSet": {
      "gmd:MD_CharacterSetCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_CharacterSetCode",
        "-codeListValue": "utf8",
        "-codeSpace": "ISOTC211/19115",
        "#text": "utf8"
      }
    },
    "gmd:hierarchyLevel": {
      "gmd:MD_ScopeCode": {
        "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ScopeCode",
        "-codeListValue": "dataset",
        "-codeSpace": "ISOTC211/19115",
        "#text": "dataset"
      }
    },
    "gmd:contact": {
      "gmd:CI_ResponsibleParty": {
        "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
        "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
        "gmd:contactInfo": {
          "gmd:CI_Contact": {
            "gmd:phone": {
              "gmd:CI_Telephone": {
                "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
              }
            },
            "gmd:address": {
              "gmd:CI_Address": {
                "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                "gmd:city": { "gco:CharacterString": "Waterloo" },
                "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                "gmd:country": { "gco:CharacterString": "Canada" },
                "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
              }
            }
          }
        },
        "gmd:role": {
          "gmd:CI_RoleCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
            "-codeListValue": "pointOfContact",
            "-codeSpace": "ISOTC211/19115",
            "#text": "pointOfContact"
          }
        }
      }
    },
    "gmd:dateStamp": { "gco:Date": "2019-05-01" },
    "gmd:metadataStandardName": { "gco:CharacterString": "North American Profile of ISO 19115:2003" },
    "gmd:metadataStandardVersion": { "gco:CharacterString": "2009-01-01" },
    "gmd:dataSetURI": { "gco:CharacterString": "https://www.polardata.ca/pdcsearch/PDCSearchDOI.jsp?doi_id=13079" },
    "gmd:identificationInfo": {
      "gmd:MD_DataIdentification": {
        "gmd:citation": {
          "gmd:CI_Citation": {
            "gmd:title": { "gco:CharacterString": "ERA5 global reanalysis precipitation, evaporation, and runoff for 2002-2017" },
            "gmd:date": {
              "gmd:CI_Date": {
                "gmd:date": { "gco:Date": "2019-05-01" },
                "gmd:dateType": {
                  "gmd:CI_DateTypeCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                    "-codeListValue": "publication",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "publication"
                  }
                }
              }
            },
            "gmd:citedResponsibleParty": [
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Van Cappellen, Philippe " },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "principalInvestigator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "principalInvestigator"
                    }
                  }
                }
              },
              {
                "gmd:CI_ResponsibleParty": {
                  "gmd:individualName": { "gco:CharacterString": "Kheyrollah Pour, Homa" },
                  "gmd:role": {
                    "gmd:CI_RoleCode": {
                      "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                      "-codeListValue": "Originator",
                      "-codeSpace": "ISOTC211/19115",
                      "#text": "Originator"
                    }
                  }
                }
              }
            ],
            "gmd:otherCitationDetails": { "gco:CharacterString": "Copernicus Climate Change Service (C3S) (2017): ERA5: Fifth generation of ECMWF atmospheric reanalyses of the global climate. Copernicus Climate Change Service Climate Data Store (CDS), date of access. https://cds.climate.copernicus.eu/cdsapp#!/home" }
          }
        },
        "gmd:abstract": { "gco:CharacterString": "ERA5, is the climate reanalysis dataset from European Centre for Medium-Range Weather Forecasts (ECMWF), which is substantially upgraded in comparison with ERA-Interim, with a spatial grid resolution of 0.25 degree (~31 km) and hourly temporal resolution, 137 vertical levels of the atmosphere, and increased amount of assimilated data using 4DVar data assimilation method. More details on ERA5 are available at https://confluence.ecmwf.int/display/CKB/ERA5+data+documentation. All ERA5 data were downloaded from the Copernicus Climate Change Service website (https://cds.climate.copernicus.eu/#!/search?text=ERA5&type=dataset), and is currently available on the GWF Cuizinart. The variables currently available are cloud cover (0-1), precipitation (mm), evaporation (mm), and runoff (mm) for the period of 2002-2017. Researchers interested in the data from the GWF Cuizinart can email Homa Kheyrollah Pour (University of Waterloo; h2kheyrollahpour@uwaterloo.ca)" },
        "gmd:purpose": { "gco:CharacterString": "ERA5, is the fifth generation atmospheric reanalysis dataset from European Centre for Medium-Range Weather Forecasts (ECMWF) that is available to support atmospheric and hydrological research across the globe. This data set will be used to support the modelling objectives of the Global Water Futures (GWF) Program funded by Canada First Research Excellence Fund." },
        "gmd:status": {
          "gmd:MD_ProgressCode": {
            "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_ProgressCode",
            "-codeListValue": "completed",
            "-codeSpace": "ISOTC211/19115",
            "#text": "completed"
          }
        },
        "gmd:pointOfContact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                },
                "gmd:onlineResource": {
                  "gmd:CI_OnlineResource": {
                    "gmd:linkage": { "gmd:URL": "polardata.ca" },
                    "gmd:protocol": { "gco:CharacterString": "http" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "pointOfContact",
                "-codeSpace": "ISOTC211/19115",
                "#text": "pointOfContact"
              }
            }
          }
        },
        "gmd:descriptiveKeywords": [
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": [
                { "gco:CharacterString": "Atmosphere" },
                { "gco:CharacterString": "Clouds" },
                { "gco:CharacterString": "Global" },
                { "gco:CharacterString": "Modeling" },
                { "gco:CharacterString": "Monitoring" },
                { "gco:CharacterString": "Precipitations" },
                { "gco:CharacterString": "Surface water runoff" },
                { "gco:CharacterString": "Temperature" },
                { "gco:CharacterString": "Water" }
              ],
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "theme",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "theme"
                }
              },
              "gmd:thesaurusName": {
                "gmd:CI_Citation": {
                  "gmd:title": { "gco:CharacterString": "Polar Data Catalogue Thesaurus (Canada)" },
                  "gmd:date": {
                    "gmd:CI_Date": {
                      "gmd:date": { "gco:Date": "2019-05-01" },
                      "gmd:dateType": {
                        "gmd:CI_DateTypeCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_DateTypeCode",
                          "-codeListValue": "publication",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "publication"
                        }
                      }
                    }
                  },
                  "gmd:citedResponsibleParty": {
                    "gmd:CI_ResponsibleParty": {
                      "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                      "gmd:contactInfo": {
                        "gmd:CI_Contact": {
                          "gmd:phone": {
                            "gmd:CI_Telephone": {
                              "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                            }
                          },
                          "gmd:address": {
                            "gmd:CI_Address": {
                              "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                              "gmd:city": { "gco:CharacterString": "Waterloo" },
                              "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                              "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                              "gmd:country": { "gco:CharacterString": "Canada" },
                              "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                            }
                          },
                          "gmd:onlineResource": {
                            "gmd:CI_OnlineResource": {
                              "gmd:linkage": { "gmd:URL": "polardata.ca" },
                              "gmd:protocol": { "gco:CharacterString": "http" }
                            }
                          }
                        }
                      },
                      "gmd:role": {
                        "gmd:CI_RoleCode": {
                          "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                          "-codeListValue": "originator",
                          "-codeSpace": "ISOTC211/19115",
                          "#text": "originator"
                        }
                      }
                    }
                  },
                  "gmd:otherCitationDetails": { "gco:CharacterString": "https://www.polardata.ca/pdcinput/public/keywordlibrary" }
                }
              }
            }
          },
          {
            "gmd:MD_Keywords": {
              "gmd:keyword": { "gco:CharacterString": "Global" },
              "gmd:type": {
                "gmd:MD_KeywordTypeCode": {
                  "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",
                  "-codeListValue": "place",
                  "-codeSpace": "ISOTC211/19115",
                  "#text": "place"
                }
              }
            }
          }
        ],
        "gmd:resourceConstraints": {
          "gmd:MD_LegalConstraints": {
            "gmd:accessConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:useConstraints": {
              "gmd:MD_RestrictionCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode",
                "-codeListValue": "otherRestrictions",
                "-codeSpace": "ISOTC211/19115",
                "#text": "otherRestrictions"
              }
            },
            "gmd:otherConstraints": { "gco:CharacterString": "Terms of Use of the Polar Data Catalogue: https://www.polardata.ca/pdcinput/public/termsofuse" }
          }
        },
        "gmd:language": { "gco:CharacterString": "eng; CAN" },
        "gmd:topicCategory": { "gmd:MD_TopicCategoryCode": "environment" },
        "gmd:extent": {
          "gmd:EX_Extent": {
            "-id": "boundingExtent",
            "gmd:geographicElement": {
              "gmd:EX_GeographicBoundingBox": {
                "-id": "boundingGeographicBoundingBox",
                "gmd:westBoundLongitude": { "gco:Decimal": "-180" },
                "gmd:eastBoundLongitude": { "gco:Decimal": "180" },
                "gmd:southBoundLatitude": { "gco:Decimal": "-90" },
                "gmd:northBoundLatitude": { "gco:Decimal": "90" }
              }
            },
            "gmd:temporalElement": {
              "gmd:EX_TemporalExtent": {
                "gmd:extent": {
                  "gml:TimePeriod": {
                    "-gml:id": "boundingTemporalExtent",
                    "gml:description": "Time period can be either covered by the content of the dataset or the date when the data has been collected.",
                    "gml:beginPosition": "2002-01-01",
                    "gml:endPosition": "2017-12-26"
                  }
                }
              }
            }
          }
        },
        "gmd:supplementalInformation": { "gco:CharacterString": "Summary: Not Applicable Research Program(s): GWF. For further information: https://cds.climate.copernicus.eu/#!/search?text=ERA5&type=dataset" }
      }
    },
    "gmd:contentInfo": {
      "gmd:MD_FeatureCatalogueDescription": {
        "gmd:includedWithDataset": { "gco:Boolean": "false" },
        "gmd:featureCatalogueCitation": { "-gco:nilReason": "unknown" }
      }
    },
    "gmd:distributionInfo": {
      "gmd:MD_Distribution": {
        "gmd:distributionFormat": {
          "gmd:MD_Format": {
            "gmd:name": { "gco:CharacterString": "Digital file" },
            "gmd:version": { "gco:CharacterString": "1.0" }
          }
        },
        "gmd:distributor": {
          "gmd:MD_Distributor": {
            "gmd:distributorContact": {
              "gmd:CI_ResponsibleParty": {
                "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
                "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
                "gmd:contactInfo": {
                  "gmd:CI_Contact": {
                    "gmd:phone": {
                      "gmd:CI_Telephone": {
                        "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                      }
                    },
                    "gmd:address": {
                      "gmd:CI_Address": {
                        "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                        "gmd:city": { "gco:CharacterString": "Waterloo" },
                        "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                        "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                        "gmd:country": { "gco:CharacterString": "Canada" },
                        "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                      }
                    }
                  }
                },
                "gmd:role": {
                  "gmd:CI_RoleCode": {
                    "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                    "-codeListValue": "distributor",
                    "-codeSpace": "ISOTC211/19115",
                    "#text": "distributor"
                  }
                }
              }
            }
          }
        }
      }
    },
    "gmd:metadataMaintenance": {
      "gmd:MD_MaintenanceInformation": {
        "gmd:maintenanceAndUpdateFrequency": { "-gco:nilReason": "unknown" },
        "gmd:maintenanceNote": { "gco:CharacterString": "This metadata was generated from the PDC metadata database at 2019-05-01" },
        "gmd:contact": {
          "gmd:CI_ResponsibleParty": {
            "gmd:individualName": { "gco:CharacterString": "Polar Data Catalogue" },
            "gmd:organisationName": { "gco:CharacterString": "Canadian Cryospheric Information Network" },
            "gmd:contactInfo": {
              "gmd:CI_Contact": {
                "gmd:phone": {
                  "gmd:CI_Telephone": {
                    "gmd:voice": { "gco:CharacterString": "(519) 888-4567 x32689" }
                  }
                },
                "gmd:address": {
                  "gmd:CI_Address": {
                    "gmd:deliveryPoint": { "gco:CharacterString": "200 University Avenue West, University of Waterloo" },
                    "gmd:city": { "gco:CharacterString": "Waterloo" },
                    "gmd:administrativeArea": { "gco:CharacterString": "Ontario" },
                    "gmd:postalCode": { "gco:CharacterString": "N2L 3G1" },
                    "gmd:country": { "gco:CharacterString": "Canada" },
                    "gmd:electronicMailAddress": { "gco:CharacterString": "pdc@uwaterloo.ca" }
                  }
                }
              }
            },
            "gmd:role": {
              "gmd:CI_RoleCode": {
                "-codeList": "http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#CI_RoleCode",
                "-codeListValue": "originator",
                "-codeSpace": "ISOTC211/19115",
                "#text": "originator"
              }
            }
          }
        }
      }
    }
  }
}

]