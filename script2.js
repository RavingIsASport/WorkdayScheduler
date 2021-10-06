// Display time
var today = moment();
var displayToday = today.format('dddd, MMMM Do YYYY');
$('#currentDay').text(displayToday);

// color code text area based off time
var blockTime = $('div');
// console.log(blockTime)
blockTime.each(function () {
    var now = moment(today)
    var timeId = moment($(this).attr('id'), 'h a');
    // console.log(timeId);

    if (timeId.isBefore(now)) {
        console.log('past')
        return $('textarea').addClass('past');
    }

    else if (timeId.isSame(now)) {
        console.log('present')
        return $('textarea').addClass('present')
    }

    else if (timeId.isAfter(now)) {
        console.log('future')
        return $('textarea').addClass('future');
    }
});
// saveBtn click listener 
$(".btn").on('click', function () {
    // Get nearby values of the description in JQuery
    var text = $(this).parent().children('textarea').val();
    // Save text in local storage
    localStorage.setItem('savedText', text);
    console.log(text);
    
});

// get local storage 
localStorage.getItem('savedText');
