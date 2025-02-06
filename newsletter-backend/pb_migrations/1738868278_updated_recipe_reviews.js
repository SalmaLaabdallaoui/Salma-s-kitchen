/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_41914584")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_zndKxlY700` ON `recipe_reviews` (\n  `userId`,\n  `recipeId`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_41914584")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_zndKxlY700` ON `recipe_reviews` (\n  `userId`,\n  `recipeId`\n)"
    ]
  }, collection)

  return app.save(collection)
})
