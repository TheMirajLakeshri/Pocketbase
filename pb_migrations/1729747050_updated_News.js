/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ozoss3x0gqkbnvz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyp2yzmc",
    "name": "Prediction",
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

  // remove
  collection.schema.removeField("eyp2yzmc")

  return dao.saveCollection(collection)
})