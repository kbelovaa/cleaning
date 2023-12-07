import React from 'react';
import './CancellationPolicy.scss';

const CancellationPolicy = () => (
  <div className="cancellation-wrap">
    <div className="container">
      <div className="cancellation">
        <h2 className="cancellation__title">Cancellation Policy</h2>
        <div className="cancellation__point">
          <h3 className="cancellation__subtitle">Short answer:</h3>
          <p className="cancellation__text">
            You can cancel or edit your appointment for free within 1 hour of booking it or up to 48 hours before the
            time affected by the change. If you cancel or edit your appointment outside these times, you may receive a
            partial refund.
          </p>
        </div>
        <div className="cancellation__point">
          <h3 className="cancellation__subtitle">Cancellation policy:</h3>
          <table className="cancellation__conditions">
            <tr className="cancellation__line">
              <th className="cancellation__header">Time of cancellation or edit</th>
              <th className="cancellation__header">Refund</th>
            </tr>
            <tr className="cancellation__line">
              <td className="cancellation__column">Within 1 hour of booking</td>
              <td className="cancellation__column">Full refund</td>
            </tr>
            <tr className="cancellation__line">
              <td className="cancellation__column">Over 48 hours in advance</td>
              <td className="cancellation__column">Full refund</td>
            </tr>
            <tr className="cancellation__line">
              <td className="cancellation__column">24 to 48 hours in advance</td>
              <td className="cancellation__column">Partial refund: you’ll pay 50% of booking value</td>
            </tr>
            <tr className="cancellation__line">
              <td className="cancellation__column">Less than 24 hours in advance</td>
              <td className="cancellation__column">Partial refund: you’ll pay 100% of booking value</td>
            </tr>
          </table>
          <p className="cancellation__text">
            Please note that the time of cancellation or editing is calculated based on the start time of your cleaning
            appointment or the earliest part of the appointment affected by the change.
          </p>
        </div>
        <div className="cancellation__point">
          <h3 className="cancellation__subtitle">Refund Process:</h3>
          <p className="cancellation__text">
            Refunds for cancellations will be credited to your account with us, which you can use for a future cleaning
            service or withdraw back to your payment card. If the time you canceled becomes booked by another customer,
            you will receive a refund for that time.
          </p>
        </div>
        <div className="cancellation__point">
          <h3 className="cancellation__subtitle">Exceptional Circumstances:</h3>
          <p className="cancellation__text">
            We understand that unforeseen situations may arise, such as an owner requesting cancellation or difficulties
            finding keys. In such rare cases, we may offer a full refund. When canceling, please select the most
            appropriate reason from the options provided in the app or website. If your reason is not listed, select
            “Other” and reach out to our customer support for assistance.
          </p>
          <p className="cancellation__text">
            We hope this policy provides clarity and transparency regarding cancellations and edits to your cleaning
            appointments. If you have any further questions or require assistance, please do not hesitate to contact us.
            Your satisfaction is our priority.
          </p>
        </div>
        <div className="cancellation__point">
          <h3 className="cancellation__subtitle">Example Scenarios for Cleaning Services:</h3>
          <p className="cancellation__text">
            Michelle has reserved a cleaning appointment for €100. Her scheduled cleaning service is set to begin at 9
            am on Friday.
          </p>
        </div>
        <div className="cancellation__point">
          <h4 className="cancellation__subtitle cancellation__subtitle_scenario">
            Scenario 1: Cancelling a Cleaning Appointment
          </h4>
          <p className="cancellation__text">
            If Michelle cancels her appointment before 9 am on Wednesday (more than 48 hours in advance), she won’t
            incur any cancellation fees.
          </p>
          <p className="cancellation__text">
            Should she choose to cancel on Wednesday afternoon (less than 48 hours but more than 24 hours in advance),
            she will be charged 50%, which amounts to €50.
          </p>
          <p className="cancellation__text">
            If Michelle cancels after 9 am on Thursday (less than 24 hours before the start time), she’ll be charged
            100%, or €100.
          </p>
        </div>
        <div className="cancellation__point">
          <h4 className="cancellation__subtitle cancellation__subtitle_scenario">
            Scenario 2: Changing the Start Time of a Cleaning Appointment
          </h4>
          <p className="cancellation__text">
            If Lloyd makes this change within 1 hour of booking or before 9 am on Saturday, he won’t face any unused
            time fees, and the total cost will remain at €150 for Tuesday only.
          </p>
          <p className="cancellation__text">
            Lloyd has scheduled a cleaning appointment at 9 am on Monday for €150. Later, he decides to postpone the
            entire booking to Tuesday.
          </p>
          <p className="cancellation__text">
            If he makes the change between 9 am on Saturday and 9 am on Sunday, an unused time fee of 50% of the
            reserved time applies. This results in a €75 charge for the unused time on Monday, in addition to the €150
            for Tuesday.
          </p>
          <p className="cancellation__text">
            If the change occurs after 9 am on Sunday, an unused time fee of 100% of the reserved time, up to 12 hours,
            is incurred. In this case, the maximum charge of €150 is added to the €150 for Tuesday.
          </p>
        </div>
        <div className="cancellation__point">
          <h4 className="cancellation__subtitle cancellation__subtitle_scenario">
            Scenario 3: Changing the Start Time of a Cleaning Appointment (Late Notice)
          </h4>
          <p className="cancellation__text">
            Monica has booked a cleaning appointment at 9 am on Saturday but oversleeps and decides to reschedule it to
            10:30 am. The time from 9 am to 10:30 am is considered “unused time” and because the change was made with
            less than 24 hours’ notice, Monica will be charged 100% of the unused time in addition to the 2 hours she
            uses the cleaning service.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CancellationPolicy;
