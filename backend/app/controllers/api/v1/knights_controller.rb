module Api::V1
    class KnightsController < ApplicationController
  
      def index
        @knights = Knight.all
        render json: @knights
      end
  
      def show
        @knights = Knight.find(params[:id])
        render json: @knights
      end
  
      def create
        @knights = Knight.new(knight_params)
  
        if @knights.save
          render json: @knights, status: :created
        else
          render json: @knights.errors, status: :unprocessable_entity
        end
      end
  
      def update
        @knights = Knight.find(params[:id])
        if @knights.update(knight_params)
          render json: @knights
        else
          render json: @knights.errors, status: :unprocessable_entity
        end
      end
  
      def destroy
        @knights = Knight.find(params[:id])
        @knights.destroy
      end
      ###############################################################
      private
  
      def knight_params
        params
            .require(:knight)
            .permit(:name, :trait, :attack, :defense, :level)
      end
  
    end
  end