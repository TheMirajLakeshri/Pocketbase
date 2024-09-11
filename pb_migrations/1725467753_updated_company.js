/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4p3foytsgw0cz7")

  // remove
  collection.schema.removeField("iqmsmmcf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "foxl47d3",
    "name": "GSTIN",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 15,
      "max": 15,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4p3foytsgw0cz7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqmsmmcf",
    "name": "GSTIN",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("foxl47d3")

  return dao.saveCollection(collection)
})
