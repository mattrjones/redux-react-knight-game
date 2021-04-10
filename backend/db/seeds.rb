# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Knight.create(
    name: "Sir Gawain",
    trait: "brave",
    attack: 7,
    defense: 3,
    level: 1
)

Question.create(
    question_text: "How many Harry Potter books are there?",
    answer_one: "1",
    answer_two: "4",
    answer_three: "6",
    answer_four: "7",
    correct_answer: "7"
)