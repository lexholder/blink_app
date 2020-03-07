class CreateComputerTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :computer_times do |t|
      t.date :date
      t.references :user, foreign_key: true
      t.integer :minutes

      t.timestamps
    end
  end
end
