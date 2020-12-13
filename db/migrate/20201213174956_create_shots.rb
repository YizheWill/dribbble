class CreateShots < ActiveRecord::Migration[6.0]
  def change
    create_table :shots do |t|
      t.string :title, null: false
      t.string :description, default: ''
      t.string :image_url, default: 'https://cdn.dribbble.com/users/33073/screenshots/14751019/media/46c066bf824f49258ab7f3ae5025f3a6.png?compress=1&resize=1600x1200'
      t.integer :view_count, default: 0
      t.boolean :allow_comment, default: true
      t.boolean :image_or_video, default: true
      t.decimal :price, default: 0.0
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :collection, null: false, foreign_key: true

      t.timestamps
    end
  end
end
