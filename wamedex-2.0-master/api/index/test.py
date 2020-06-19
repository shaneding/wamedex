from pyserini.search import pysearch

searcher = pysearch.SimpleSearcher("iso19115/")
hits = searcher.search('water')

# Print the first 10 hits:
for i in range(0, 10):
    print(f'{i+1:2} {hits[i].docid:15} {hits[i].score:.5f}')

doc = hits[0].lucene_document
print([field.stringValue() for field in doc.getFields("authors")])