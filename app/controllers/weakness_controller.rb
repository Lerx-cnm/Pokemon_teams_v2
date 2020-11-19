class WeaknessController < ApplicationController
    def show
        weak = Weakness.find_by(main_type: params[:id].capitalize)
        render json: weak.to_json
    end
end