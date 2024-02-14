package model

type User struct {
	UserName string `json:"userName"`
	Win      int    `json:"win"`
	Loose    int    `json:"loose"`
}
