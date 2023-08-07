package models

import (
	"time"

	"gorm.io/gorm"
)

type AdminActionLog struct {
	gorm.Model
	AdminID     string    `gorm:"not null" json:"adminId"`
	Action      string    `gorm:"not null" json:"action"`
	TargetID    string    `gorm:"not null" json:"targetId"`
	TargetTable string    `gorm:"not null" json:"targetTable"`
	Timestamp   time.Time `gorm:"not null" json:"timestamp"`
	IPAddress   string    `gorm:"not null" json:"ipAddress"`
	ActionType  string    `gorm:"not null" json:"actionType"`
}
