/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7g0d0igu3w9xou")

  // update
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
        "Other"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e7g0d0igu3w9xou")

  // update
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
})
