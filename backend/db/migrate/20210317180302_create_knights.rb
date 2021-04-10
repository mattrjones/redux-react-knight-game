class CreateKnights < ActiveRecord::Migration[6.1]
  def change
    create_table :knights do |t|
      t.string :name
      t.string :trait
      t.integer :attack
      t.integer :defense
      t.integer :level

      t.timestamps
    end
  end
end
