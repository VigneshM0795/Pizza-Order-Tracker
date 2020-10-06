<template>
<div class="container">
    <div class="orderlist">

        <h2 class="heading">Pizza Orders List</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>No. of Items ordered</th>
                    <th>Total Amount(₹)</th>
                    <th>Status</th>
                    <th>Change Order Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>3</td>
                    <td>699.00</td>
                    <td id="order1">Ready To serve</td>
                    <td><button id="change1" type="button" class="btn btn-outline-success" @click="changeorder1()">Change Order Status</button></td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>2</td>
                    <td>399.00</td>
                    <td id="order2">Preparing</td>
                    <td><button id="change2" type="button" class="btn btn-outline-success" @click="changeorder2()">Change Order Status</button></td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>5</td>
                    <td>1299.00</td>
                    <td id="order3">Preparing</td>
                    <td><button id="change3" type="button" class="btn btn-outline-success" @click="changeorder3()">Change Order Status</button></td>
                </tr>
                <tr>
                    <td>Dooley</td>
                    <td>1</td>
                    <td>159.00</td>
                    <td id="order4">Ready to sreve</td>
                    <td><button id="change4" type="button" class="btn btn-outline-success" @click="changeorder4()">Change Order Status</button></td>
                </tr>
                <tr>
                    <td>Doe</td>
                    <td>3</td>
                    <td>799.00</td>
                    <td id="order5">Ready to sreve</td>
                    <td><button id="change5" type="button" class="btn btn-outline-success" @click="changeorder5()">Change Order Status</button></td>
                </tr>
            </tbody>
        </table>
        <div class="page">
            <ul class="pagination">
                <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item disabled"><a class="page-link" href="#">1</a></li>
                <li class="page-item disabled"><a class="page-link" href="#">Next</a></li>
            </ul>
        </div>

    </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;
export default {
    mounted() {

    },
    methods: {
        changeorder1() {
            var arr = ["Order Received", "Preparing", "Ready To serve"];
            $(document).on('click', '#change1', function () {
                var current = parseInt($("#order1").text(), 10),
                    currentIndex = arr.indexOf(current);

                var value;
                if (currentIndex == (arr.length - 1)) {
                    value = arr[0];
                } else {
                    value = arr[++currentIndex];
                }

                $("#order1").text(value);
            });
        },

        changeorder2() {
            var arr = ["Order Received", "Preparing", "Ready To serve"];
            $(document).on('click', '#change2', function () {
                var current = parseInt($("#order2").text(), 10),
                    currentIndex = arr.indexOf(current);

                var value;
                if (currentIndex == (arr.length - 1)) {
                    value = arr[0];
                } else {
                    value = arr[++currentIndex];
                }

                $("#order2").text(value);
            });
        },
        changeorder3() {
            var arr = ["Order Received", "Preparing", "Ready To serve"];
            $(document).on('click', '#change3', function () {
                var current = parseInt($("#order3").text(), 10),
                    currentIndex = arr.indexOf(current);

                var value;
                if (currentIndex == (arr.length - 1)) {
                    value = arr[0];
                } else {
                    value = arr[++currentIndex];
                }

                $("#order3").text(value);
            });
        },
        changeorder4() {
            var arr = ["Order Received", "Preparing", "Ready To serve"];
            $(document).on('click', '#change4', function () {
                var current = parseInt($("#order4").text(), 10),
                    currentIndex = arr.indexOf(current);

                var value;
                if (currentIndex == (arr.length - 1)) {
                    value = arr[0];
                } else {
                    value = arr[++currentIndex];
                }

                $("#order4").text(value);
            });
        },
        changeorder5() {
            var arr = ["Order Received", "Preparing", "Ready To serve"];
            $(document).on('click', '#change5', function () {
                var current = parseInt($("#order5").text(), 10),
                    currentIndex = arr.indexOf(current);

                var value;
                if (currentIndex == (arr.length - 1)) {
                    value = arr[0];
                } else {
                    value = arr[++currentIndex];
                }

                $("#order5").text(value);
            });
        }

    }
}
</script>
