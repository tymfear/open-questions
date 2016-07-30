class QuestionsController < ApplicationController
  before_action :authenticate_user!
  before_action :load_question, only: [:show, :update]

  def index
    @questions = Question.featured(params[:feature_id]).includes(:user)
  end

  def show
  end

  def create
     if @question.save
      @notice = 'Question asked successfully'

      render :show
    else
      render json: @question.errors.messages, status: :unprocessable_entity
    end
  end

  def update
    if @question.update feature_params
      @notice = 'Question updated successfully'

      render :show
    else
      render json: @question.errors.messages, status: :unprocessable_entity
    end
  end

  private
  def load_question
    @question = Question.find params[:id]
  end

  def question_params
    params.require(:question)
        .permit :body, :responder, :user_id, :status
  end
end
