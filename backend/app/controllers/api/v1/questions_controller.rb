module Api::V1
    class QuestionsController < ApplicationController
  
      def index
        @questions = Question.all
        render json: @questions
      end
  
      def show
        @questions = Question.find(params[:id])
        render json: @questions
      end
  
      def create
        @questions = Question.new(question_params)
  
        if @questions.save
          render json: @questions, status: :created
        else
          render json: @questions.errors, status: :unprocessable_entity
        end
      end
  
      def update
        @questions = Question.find(params[:id])
        if @questions.update(question_params)
          render json: @questions
        else
          render json: @questions.errors, status: :unprocessable_entity
        end
      end
  
      def destroy
        @questions = Question.find(params[:id])
        @questions.destroy
      end
      ###############################################################
      private
  
      def question_params
        params
            .require(:question)
            .permit(:question_text, :answer_four, :answer_one, :answer_two, :answer_three, :correct_answer)
      end
  
    end
  end