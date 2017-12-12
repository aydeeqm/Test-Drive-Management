$(function() {
    $("#scheduler").kendoScheduler({
        date: new Date(),
        startTime: new Date("2017/12/12 07:00 AM"),
        height: 600,
        views: [
            "day",
            "workWeek",
            "week",
             {
                 type: "month",
                 selected: true
             },
            "agenda",
            {
                type: "timeline",
                eventHeight: 10
            }
        ],
        timezone: "Etc/GMT+5",
        /* dataSource: {
            batch: true,
            transport: {
                read: {
                    url: "https://demos.telerik.com/kendo-ui/service/tasks",
                    dataType: "jsonp"
                },
                update: {
                    url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
                    dataType: "jsonp"
                },
                create: {
                    url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
                    dataType: "jsonp"
                },
                destroy: {
                    url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
                    dataType: "jsonp"
                },
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return {models: kendo.stringify(options.models)};
                    }
                }
            },
            schema: {
                model: {
                    id: "taskId",
                    fields: {
                        taskId: { from: "TaskID", type: "number" },
                        title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                        start: { type: "date", from: "Start" },
                        end: { type: "date", from: "End" },
                        startTimezone: { from: "StartTimezone" },
                        endTimezone: { from: "EndTimezone" },
                        description: { from: "Description" },
                        recurrenceId: { from: "RecurrenceID" },
                        recurrenceRule: { from: "RecurrenceRule" },
                        recurrenceException: { from: "RecurrenceException" },
                        ownerId: { from: "OwnerID", defaultValue: 1 },
                        isAllDay: { type: "boolean", from: "IsAllDay" }
                    }
                }
            },
            filter: {
                logic: "or",
                filters: [
                    { field: "ownerId", operator: "eq", value: 1 },
                    { field: "ownerId", operator: "eq", value: 2 }
                ]
            }
        }, */
        
        dataSource: [
            {
                taskId: 1,
                ownerId: 1,
                title: "",
                start: new Date("2017/12/12 8:00 AM"),
                end: new Date("2017/12/12 1:00 PM"),
                description: "hackathon con mucha nota",
                startTimezone: null,
                endTimezone: null,
                recurrenceRule: null,
                recurrenceID: null,
                recurrenceException: null,
                isAllDay: false,
            },
            {
                taskId: 2,
                ownerId: 1,
                title: "",
                start: new Date("2017/12/12 2:00 PM"),
                end: new Date("2017/12/12 6:00 PM"),
                description: "hackathon con mucha nota",
                startTimezone: null,
                endTimezone: null,
                recurrenceRule: null,
                recurrenceID: null,
                recurrenceException: null,
                isAllDay: false,
            },
            {
                taskId: 3,
                ownerId: 2,
                title: "",
                start: new Date("2017/12/11 08:00 AM"),
                end: new Date("2017/12/11 09:00 AM"),
                description: "hackathon con mucha nota",
                startTimezone: null,
                endTimezone: null,
                recurrenceRule: null,
                recurrenceID: null,
                recurrenceException: null,
                isAllDay: false,
            },
            {
                taskId: 4,
                ownerId: 3,
                title: "",
                start: new Date("2017/12/16 08:00 AM"),
                end: new Date("2017/12/16 09:00 AM"),
                description: "front end developer",
                startTimezone: null,
                endTimezone: null,
                recurrenceRule: null,
                recurrenceID: null,
                recurrenceException: null,
                isAllDay: false,
            }
        ],
        resources: [
            {
                field: "ownerId",
                title: "Owner",
                dataSource: [
                    { text: "Solicitud", value: 1, color: "#3fb5e4" },
                    { text: "Programado", value: 2, color: "#e6262f" },
                    { text: "Disponible-part", value: 3, color: "#f0bd17" },
                    { text: "Disponible-day", value: 4, color: "#04970b" },
                    { text: "Comprometido", value: 5, color: "#282e28" }
                ]
            }
        ]
    });

    $("#people :checkbox").change(function(e) {
        var checked = $.map($("#people :checked"), function(checkbox) {
            return parseInt($(checkbox).val());
        });

        var scheduler = $("#scheduler").data("kendoScheduler");

        scheduler.dataSource.filter({
            operator: function(task) {
                return $.inArray(task.ownerId, checked) >= 0;
            }
        });
    });
});