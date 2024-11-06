/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7g0d0igu3w9xou")

  // remove
  collection.schema.removeField("misi9jzz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xz5aswho",
    "name": "Sex",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Male",
        "Female",
        "Others"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7g0d0igu3w9xou")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "misi9jzz",
    "name": "Sex",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("xz5aswho")

  return dao.saveCollection(collection)
})
