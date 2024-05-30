package gnofundme

import (
	"strconv"
	"time"
)

type Contributor struct {
	// the user who contributed
	user *User
	// the date of the contribution
	date time.Time
	// the amount of the contribution
	amount int64
	// whether the contributor wants to be displayed (Anonymous in case of false)
	display bool
}

func NewContributor(user *User, amount int64, display bool) *Contributor {
	return &Contributor{
		user:    user,
		date:    time.Now(),
		amount:  amount,
		display: display,
	}
}

func (c Contributor) GetUser() *User {
	return c.user
}

func (c Contributor) GetDate() time.Time {
	return c.date
}

func (c Contributor) GetAmount() int64 {
	return c.amount
}

func (c Contributor) GetDisplay() bool {
	return c.display
}

func (c Contributor) String() string {
	return "Contributor{" +
		"Contributor Address: " + c.user.GetAddress().String() +
		", date: " + c.date.Format(time.RFC822) +
		", amount: " + strconv.Itoa(int(c.amount)) +
		", display: " + FormatBool(c.display) +
		"}"
}

func FormatBool(b bool) string {
	if b {
		return "true"
	}
	return "false"
}
