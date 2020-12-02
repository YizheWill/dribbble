class ImageTagsController < ApplicationController
  before_action :set_image_tag, only: [:show, :update, :destroy]

  # GET /image_tags
  def index
    @image_tags = ImageTag.all

    render json: @image_tags
  end

  # GET /image_tags/1
  def show
    render json: @image_tag
  end

  # POST /image_tags
  def create
    @image_tag = ImageTag.new(image_tag_params)

    if @image_tag.save
      render json: @image_tag, status: :created, location: @image_tag
    else
      render json: @image_tag.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /image_tags/1
  def update
    if @image_tag.update(image_tag_params)
      render json: @image_tag
    else
      render json: @image_tag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /image_tags/1
  def destroy
    @image_tag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image_tag
      @image_tag = ImageTag.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def image_tag_params
      params.require(:image_tag).permit(:tag_id, :shot_id)
    end
end
