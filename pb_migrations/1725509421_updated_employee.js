/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jdhgqely8c2uc5")

  // remove
  collection.schema.removeField("txj9p6nr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zcxrnz5u",
    "name": "Adhaar_No",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jdhgqely8c2uc5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "txj9p6nr",
    "name": "Adhar_No",
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
  collection.schema.removeField("zcxrnz5u")

  return dao.saveCollection(collection)
})
