import React from "react";

function StatsChart({ stats }) {
  return (
    <div className="stats-chart-container">
      <h4>Stats</h4>
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <div className="stat-label">
            <strong>{stat.stat.name}:</strong> {stat.base_stat}
          </div>
          <div className="stat-bar-background">
            <div
              className="stat-bar-fill"
              style={{
                width: `${Math.min((stat.base_stat / 150) * 100, 100)}%`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsChart;
