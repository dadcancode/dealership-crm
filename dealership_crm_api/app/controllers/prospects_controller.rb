class ProspectsController < ApplicationController
  before_action :set_prospect, only: [:show, :update, :destroy]

  # GET /prospects
  def index
    @prospects = Prospect.all

    render json: @prospects
  end

  # GET /prospects/1
  def show
    render json: @prospect
  end

  # POST /prospects
  def create
    @prospect = Prospect.new(prospect_params)

    if @prospect.save
      render json: @prospect, status: :created, location: @prospect
    else
      render json: @prospect.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /prospects/1
  def update
    if @prospect.update(prospect_params)
      render json: @prospect
    else
      render json: @prospect.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prospects/1
  def destroy
    @prospect.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prospect
      @prospect = Prospect.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def prospect_params
      params.require(:prospect).permit(:first_name, :last_name, :phone, :email, :status)
    end
end
