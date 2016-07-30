class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :body, null: false
      t.string :status
      t.string :responder
      t.integer :user_id
      t.integer :feature_id

      t.timestamps null: false
    end
  end
end
