class FeaturesController < ApplicationController
  before_action :authenticate_user!
  before_action :load_feature, only: :show

  def index
    @features = Feature.includes(:user)
  end

  def show
  end

  def create
    @feature = Feature.new feature_params

    if @feature.save
      @notice = 'Feature created successfully'
      render :show
    else
      render json: @feature.errors.messages, status: :unprocessable_entity
    end
  end

  def update
    @feature = Feature.find params[:id]

    if @feature.update feature_params
      render :show
    else
      render json: @feature.errors.messages, status: :unprocessable_entity
    end
  end

  private
  def load_feature
    @feature = Feature.find params[:id]
  end

  def feature_params
    params.require(:feature)
      .permit :name, :github_id, :owner, :user_id, :description
  end
end
