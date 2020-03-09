class ChangeDurationForRepetitionInRoutines < ActiveRecord::Migration[5.2]
  def change
    change_table :routines do |t|
      t.rename :duration, :repetition
    end
  end
end
