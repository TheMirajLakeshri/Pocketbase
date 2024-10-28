/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ozoss3x0gqkbnvz")

  // remove
  collection.schema.removeField("3txlihsc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ny73ztsy",
    "name": "Date",
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
  const collection = dao.findCollectionByNameOrId("ozoss3x0gqkbnvz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3txlihsc",
    "name": "Date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("ny73ztsy")

  return dao.saveCollection(collection)
})
