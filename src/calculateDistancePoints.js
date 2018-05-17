const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let hill_description, initial_points, calculated_points;
  if (typeof distance !== 'number' || typeof hillSize !== 'number' || typeof kPoint !== 'number') {
    return 'Wrong type of data';
  }

  initial_points = kPoint >= 185 ? 120 : 60;

  if ( distance % 2 > 0.5 ) {
    final_distance = Math.floor(distance) + 0.5;
  } else {
    final_distance = Math.floor(distance) - 0.5;
  };

  calculated_points = final_distance - kPoint;

  if ( hillSize < 50 ) {
    hill_description = "Small hill";
    calculated_points = calculated_points * 2;
  }
  
  if ( hillSize >= 50 && hillSize < 85 ) {
    hill_description = "Medium hill";
    calculated_points = calculated_points * 2;
  }
  
  if ( hillSize >= 85 && hillSize < 110 ) {
    hill_description = "Normal hill";
    calculated_points = calculated_points * 2;
  }

  if ( hillSize >= 110 && hillSize < 185 ) {
    hill_description = "Large hill";
    calculated_points = calculated_points * 1.8;
  }

  if ( hillSize >= 185 ) {
    hill_description = "Ski flying hill";
    calculated_points = calculated_points * 1.2;
  }

  return initial_points + calculated_points;
};

module.exports = calculateDistancePoints;
