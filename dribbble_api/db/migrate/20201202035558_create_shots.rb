class CreateShots < ActiveRecord::Migration[6.0]
  def change
    create_table :shots do |t|
      t.string :img_url, null: false
      t.string :title, null: false
      t.string :description
      t.integer :views_count, default: 0
      t.boolean :allow_comment, default: true
      t.boolean :image_or_video, default: true
      t.decimal :price, default: 1.0
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
