<template>
	<div class="main-content">
		<breadcumb :page="'Calendar'" :folder="'apps'" />
		
		<b-row>
			<!-- calendar-controls -->
			<b-col xl="3" lg="4" md="12"  class=" mb-30">
				
						<b-alert variant="success" show v-if="message" class="notification is-success">{{ message }}</b-alert>
						<b-card class="box mb-30">
							<div class="field">
								<label class="label mb-1"><h5 class="font-weight-500">Period UOM</h5></label>
								<div class="control">
									<div class="select mb-3">
										<b-form-select v-model="displayPeriodUom">
											<option>month</option>
											<option>week</option>
											<option>year</option>
										</b-form-select>
									</div>
								</div>
							</div>

							<div class="field">
								<label class="label mb-1"><h5 class="font-weight-500">Period Count</h5></label>
								<div class="control">
									<div class="select mb-3">
										<b-form-select v-model="displayPeriodCount">
											<option :value="1">1</option>
											<option :value="2">2</option>
											<option :value="3">3</option>
										</b-form-select>
									</div>
								</div>
							</div>

							<div class="field mt-3">
								<label class="label mb-1"><h5 class="font-weight-500">Starting day of the week</h5> </label>
								<div class="control">
									<div class="select mb-3">
										<b-form-select v-model="startingDayOfWeek">
											<option v-for="(d, index) in dayNames" :value="index" :key="index">{{ d }}</option>
										</b-form-select>
									</div>
								</div>
							</div>
							
							<div class="field mb-2">
								<label class="label"><h5 class="font-weight-500">Today Button</h5></label>
								<b-form-checkbox  
									v-model="useTodayIcons">	
									Icons
								</b-form-checkbox>
							</div>

							<div class="field mb-2 mt-2">
								<label class="label">
									<h5 class="font-weight-500">Themes</h5>
								</label>
								<b-form-checkbox v-model="useDefaultTheme">
									Default
								</b-form-checkbox>
							</div>

							<div class="field">
								<b-form-checkbox v-model="useHolidayTheme">
									Holidays
								</b-form-checkbox>
							</div>
						</b-card>

						<b-card class="box">
							<div class="field mb-2">
								<label class="label"><h5 class="font-weight-200">Title</h5></label>
								<b-form-input v-model="newEventTitle">	</b-form-input>
							</div>

							<div class="field mb-2">
								<label class="label"><h5 class="font-weight-200">Start date</h5></label>
								<b-form-input v-model="newEventStartDate" class="input" type="date"></b-form-input>
								
							</div>

							<div class="field mb-3">
								<label class="label"><h5 class="font-weight-200">End date</h5></label>
								<b-form-input v-model="newEventEndDate" class="input" type="date"></b-form-input>
								
							</div>

							<b-button variant="primary" @click="clickTestAddEvent">Add Event</b-button>
						</b-card>
				
			</b-col>

			<b-col xl="9" lg="8" md="12" sm="12">
				<b-card title="Add Your Event Calendar">
					<div class="calendar-parent">
						<calendar-view
							:events="events"
							:show-date="showDate"
							:time-format-options="{hour: 'numeric', minute:'2-digit'}"
							:enable-drag-drop="true"
							:disable-past="disablePast"
							:disable-future="disableFuture"
							:show-event-times="showEventTimes"
							:display-period-uom="displayPeriodUom"
							:display-period-count="displayPeriodCount"
							:starting-day-of-week="startingDayOfWeek"
							:class="themeClasses"
							:period-changed-callback="periodChanged"
							:current-period-label="useTodayIcons ? 'icons' : ''"
							@drop-on-date="onDrop"
							@click-date="onClickDay"
							@click-event="onClickEvent"
						>
							<calendar-view-header
								slot="header"
								slot-scope="{ headerProps }"
								:header-props="headerProps"
								@input="setShowDate"
							/>
						</calendar-view>
					</div>
				</b-card>
			</b-col>
		</b-row>
			
			
			
	</div>
</template>
<script>
// Load CSS from the published version
require("vue-simple-calendar/static/css/default.css")
require("vue-simple-calendar/static/css/holidays-us.css")

// Load CSS from the local repo
//require("../../vue-simple-calendar/static/css/default.css")
//require("../../vue-simple-calendar/static/css/holidays-us.css")

import {
	CalendarView,
	CalendarViewHeader,
	CalendarMathMixin,
} from "vue-simple-calendar" // published version
//} from "../../vue-simple-calendar/src/components/bundle.js" // local repo

export default {
	 metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Calendar',
      
    },
	components: {
		CalendarView,
		CalendarViewHeader,
	},
	mixins: [CalendarMathMixin],
	data() {
		return {
			/* Show the current month, and give it some fake events to show */
			showDate: this.thisMonth(1),
			message: "",
			startingDayOfWeek: 0,
			disablePast: false,
			disableFuture: false,
			displayPeriodUom: "month",
			displayPeriodCount: 2,
			showEventTimes: true,
			newEventTitle: "",
			newEventStartDate: "",
			newEventEndDate: "",
			useDefaultTheme: true,
			useHolidayTheme: true,
			useTodayIcons: false,
			events: [
				{
					id: "e0",
					startDate: "2018-01-05",
				},
				{
					id: "e1",
					startDate: this.thisMonth(15, 18, 30),
				},
				{
					id: "e2",
					startDate: this.thisMonth(15),
					title: "Single-day event with a long title",
				},
				{
					id: "e3",
					startDate: this.thisMonth(7, 9, 25),
					endDate: this.thisMonth(10, 16, 30),
					title: "Multi-day event with a long title and times",
				},
				{
					id: "e4",
					startDate: this.thisMonth(20),
					title: "My Birthday!",
					classes: "birthday",
					url: "https://en.wikipedia.org/wiki/Birthday",
				},
				{
					id: "e5",
					startDate: this.thisMonth(5),
					endDate: this.thisMonth(12),
					title: "Multi-day event",
					classes: "purple",
				},
				{
					id: "foo",
					startDate: this.thisMonth(29),
					title: "Same day 1",
				},
				{
					id: "e6",
					startDate: this.thisMonth(29),
					title: "Same day 2",
					classes: "orange",
				},
				{
					id: "e7",
					startDate: this.thisMonth(29),
					title: "Same day 3",
				},
				{
					id: "e8",
					startDate: this.thisMonth(29),
					title: "Same day 4",
					classes: "orange",
				},
				{
					id: "e9",
					startDate: this.thisMonth(29),
					title: "Same day 5",
				},
				{
					id: "e10",
					startDate: this.thisMonth(29),
					title: "Same day 6",
					classes: "orange",
				},
				{
					id: "e11",
					startDate: this.thisMonth(29),
					title: "Same day 7",
				},
			],
		}
	},
	computed: {
		userLocale() {
			return this.getDefaultBrowserLocale
		},
		dayNames() {
			return this.getFormattedWeekdayNames(this.userLocale, "long", 0)
		},
		themeClasses() {
			return {
				"theme-default": this.useDefaultTheme,
				"holiday-us-traditional": this.useHolidayTheme,
				"holiday-us-official": this.useHolidayTheme,
			}
		},
	},
	mounted() {
		this.newEventStartDate = this.isoYearMonthDay(this.today())
		this.newEventEndDate = this.isoYearMonthDay(this.today())
	},

	methods: {
		periodChanged(range, eventSource) {
			// Demo does nothing with this information, just including the method to demonstrate how
			// you can listen for changes to the displayed range and react to them (by loading events, etc.)
			console.log(eventSource)
			console.log(range)
		},
		thisMonth(d, h, m) {
			const t = new Date()
			return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
		},
		onClickDay(d) {
			this.message = `You clicked: ${d.toLocaleDateString()}`
		},
		onClickEvent(e) {
			this.message = `You clicked: ${e.title}`
		},
		setShowDate(d) {
			this.message = `Changing calendar view to ${d.toLocaleDateString()}`
			this.showDate = d
		},
		onDrop(event, date) {
			this.message = `You dropped ${event.id} on ${date.toLocaleDateString()}`
			// Determine the delta between the old start date and the date chosen,
			// and apply that delta to both the start and end date to move the event.
			const eLength = this.dayDiff(event.startDate, date)
			event.originalEvent.startDate = this.addDays(event.startDate, eLength)
			event.originalEvent.endDate = this.addDays(event.endDate, eLength)
		},
		clickTestAddEvent() {
			this.events.push({
				startDate: this.newEventStartDate,
				endDate: this.newEventEndDate,
				title: this.newEventTitle,
				id:
					"e" +
					Math.random()
						.toString(36)
						.substr(2, 10),
			})
			this.message = "You added an event!"
		},
	},
}
</script>

<style>





.calendar-controls {
	margin-right: 1rem;
	min-width: 14rem;
	max-width: 14rem;
}

.calendar-parent {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: hidden;
	max-height: 80vh;
	background-color: white;
}

/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
	min-height: 6rem;
}

/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */

/* Add some styling for events tagged with the "birthday" class */
.theme-default .cv-event.birthday {
	background-color: #e0f0e0;
	border-color: #d7e7d7;
}

.theme-default .cv-event.birthday::before {
	content: "\1F382"; /* Birthday cake */
	margin-right: 0.5em;
}
</style>
