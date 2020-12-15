class Api::V1::CollectionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_collection, only: %i(show update destroy)

  def index
    @collections = Collection.where(user_id: params[:user_id])
  end

  def create
    @collection = Shot.new(collection_params)
    if @collection.save
      @user = @collection.user
      render :show
    else
      render json: { error: @collection.errors.full_messages }.to_json, status: 422
    end
  end

  def show
  end

  def update
    if @collection.update(collection_params)
      render :show
    else
      render json: { error: 'error creating a collection, must have a title' }.to_json, status: 422
    end
  end

  def destroy
    @collection.destroy
    render json: { message: 'collection deleted' }.to_json
  end

  private

  def set_collection
    @collection = Collection.find_by(id: params[:id])
  end

  def shot_params
    params.require(:collection).permit(:id, :title, :user_id)
  end
end
