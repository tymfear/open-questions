class FeaturesController < ApplicationController
  before_action :authenticate_user!
  before_action :load_feature, only: [:show, :update]

  def index
    @features = Feature.includes(:user)
  end

  def show
  end

  def create
    @feature = Feature.new(feature_params.merge status: 2)

    if @feature.save
      @notice = 'Feature created successfully'

      render :show
    else
      render json: @feature.errors.messages, status: :unprocessable_entity
    end
  end

  def update
    if @feature.update feature_params
      @notice = 'Feature updated successfully'

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
      .permit :name, :github_id, :owner, :user_id, :description, :status
  end
end
