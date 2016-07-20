class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
      t.string :name, null: false
      t.integer :github_id
      t.string :user_id, null: false
      t.string :owner

      t.timestamps null: false
    end
  end
end
