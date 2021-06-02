package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
	"log"
)

func main() {
	// res := sh()
	resp, _ := http.Get("http://ip.cip.cc/")
	body, _ := ioutil.ReadAll(resp.Body)
	resp.Body.Close()
	fmt.Printf("%s", body)
	sb := string(body)
	fmt.Println(sb)
	log.Printf(sb)
}
