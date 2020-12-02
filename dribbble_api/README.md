![schema table](https://res.cloudinary.com/willwang/image/upload/v1606892671/Screen_Shot_2020-12-01_at_11.03.05_PM_xjdrut.png)

## snapshot of current database
![Schema](https://res.cloudinary.com/willwang/image/upload/v1606888292/Group_ejo1ae.png)

## current rails schema.db
```
  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "tier", default: 0
    t.string "location"
    t.text "bio"
    t.string "personal_website_url"
    t.string "portfolio_url"
    t.string "portfolio_password"
    t.string "twitter_url"
    t.string "facebook_url"
    t.string "github_url"
    t.boolean "work_availability", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shots", force: :cascade do |t|
    t.string "img_url", null: false
    t.string "title", null: false
    t.string "description"
    t.integer "views_count", default: 0
    t.boolean "allow_comment", default: true
    t.boolean "image_or_video", default: true
    t.decimal "price", default: "0.0"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "collection_id"
    t.index ["collection_id"], name: "index_shots_on_collection_id"
    t.index ["user_id"], name: "index_shots_on_user_id"
  end

  create_table "collections", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_collections_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "commenter_id", null: false
    t.bigint "shot_id", null: false
    t.integer "commentee_id"
    t.string "body", null: false
    t.integer "parent_comment_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shot_id"], name: "index_comments_on_shot_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "tag_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "image_tags", force: :cascade do |t|
    t.bigint "tag_id", null: false
    t.bigint "shot_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shot_id"], name: "index_image_tags_on_shot_id"
    t.index ["tag_id"], name: "index_image_tags_on_tag_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id"
    t.integer "likable_id"
    t.string "likable_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["likable_id", "likable_type"], name: "index_likes_on_likable_id_and_likable_type"
  end

  add_foreign_key "collections", "users"
  add_foreign_key "comments", "shots"
  add_foreign_key "image_tags", "shots"
  add_foreign_key "image_tags", "tags"
  add_foreign_key "shots", "users"
end
```

