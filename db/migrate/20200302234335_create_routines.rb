class CreateRoutines < ActiveRecord::Migration[5.2]
  def change
    create_table :routines do |t|
      t.references :user, foreign_key: true
      t.references :exercise, foreign_key: true
      t.date :date
      t.string :time_of_day
      t.boolean :completed
      t.integer :duration

      t.timestamps
    end
  end
end
