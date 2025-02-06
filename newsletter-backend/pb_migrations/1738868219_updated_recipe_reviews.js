/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_41914584")

  // update collection data
  unmarshal({
    "createRule": "recipeId != \"\" && recipeId != null && userId != \"\" && userId != null\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_41914584")

  // update collection data
  unmarshal({
    "createRule": "recipeId != \"\" && recipeId != null && userId != \"\" && userId != null "
  }, collection)

  return app.save(collection)
})
