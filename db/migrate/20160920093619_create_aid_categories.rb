class CreateAidCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :aid_categories do |t|
      t.string :name
      t.text :description
      t.boolean :active

      t.timestamps
    end
  end
end
