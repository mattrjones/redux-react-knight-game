class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :question_text
      t.string :answer_one
      t.string :answer_two
      t.string :answer_three
      t.string :answer_four
      t.string :correct_answer

      t.timestamps
    end
  end
end
