class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.references :product, null: false, foreign_key: true
      t.text :comment
      t.integer :rating, null: false

      t.timestamps
    end
  end
end
