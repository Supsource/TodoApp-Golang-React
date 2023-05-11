package router

import (
	"fmt"
	"net/http"
)

func Router() *http.ServeMux {
	// implementation
	fmt.Print("hello")
	return http.NewServeMux()
}
