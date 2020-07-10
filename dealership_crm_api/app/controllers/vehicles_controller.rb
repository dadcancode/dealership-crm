class VehiclesController < ApplicationController
  before_action :set_vehicle, only: [:show, :update, :destroy]

  # GET /vehicles
  def index
    @vehicles = Vehicle.all
    vehicle_years = Vehicle.select(:year).distinct.order("year DESC")

    render json: {
      vehicles: @vehicles,
      vehicle_years: vehicle_years
    }
  end

  # GET /vehicles/1
  def show
    render json: @vehicle.to_json(include: :prospects)
  end

  # GET /vehicles/2019
  def get_makes
    vehicle_makes = Vehicle.select(:make).where(year: params[:year]).distinct

    render json: vehicle_makes.to_json
  end

  def get_models
    vehicle_models = Vehicle.select(:model, :id).where(year: params[:year], make: params[:make]).distinct

    render json: vehicle_models.to_json
  end


  # POST /vehicles
  def create
    @vehicle = Vehicle.new(vehicle_params)

    if @vehicle.save
      render json: @vehicle, status: :created, location: @vehicle
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vehicles/1
  def update
    if @vehicle.update(vehicle_params)
      render json: @vehicle
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vehicles/1
  def destroy
    @vehicle.destroy
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vehicle
      @vehicle = Vehicle.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def vehicle_params
      params.require(:vehicle).permit(:type, :year, :make, :model)
    end
end
