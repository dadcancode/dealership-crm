class ProspectsController < ApplicationController
  before_action :set_prospect, only: [:show, :update, :destroy]

  # GET /prospects
  def index
    @prospects = User.find(params[:user_id]).prospects.order("created_at DESC")

    render json: @prospects.to_json
  end

  # GET /prospects/1
  def show
    render json: @prospect.to_json
  end

  # POST /prospects
  def create
    p "i ran"
    @prospect = Prospect.new(prospect_params)
    @prospect.user_id = params[:user_id]

    if @prospect.save
      render json: @prospect, status: :created
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
      params.require(:prospect).permit(:first_name, :last_name, :phone, :email, :status, :vehicle_id)
    end
end
