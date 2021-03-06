ride = function() {
    terminal = function() {
        var scrollOffset = 15;
        var scrollOutputHeight = 380;

        function init() {
            $('#form-terminal').submit(submitForm);
            $('#form-terminal').click(focus);

            updateCommandInput();
            focus();
        }

        function focus() {
            $('#form-terminal-command').focus();
        }

        function submitForm() {
            var form = $('#form-terminal');
            var url = form.attr('action');
            var data = form.serialize();

            $.ajax({
                'type': 'POST',
                'url': url,
                'data': data,
                'dataType': 'json',
                'success': function(data) {
                    var resultContainer = $('#form-terminal div.result'),
                        scrollPosition = resultContainer.scrollTop(),
                        scrollHeight = resultContainer[0].scrollHeight,
                        result = $('#form-terminal pre.result'),
                        path = $('#form-terminal pre.bash span.path'),
                        previousResult = result.html(),
                        output;

                    if (previousResult) {
                        previousResult += "\n";
                    } else {
                        result.css('margin-top', '0.3em');
                        $('#form-terminal div.bash').css('margin-top', '-0.155em');
                    }

                    if (data.output) {
                        if (data.error) {
                            output = "\n<span class=\"error\">" + data.output + "</span>";
                        } else {
                            output = "\n" + data.output;
                        }
                    } else {
                        output = '';
                    }

                    result.html(previousResult + '<span class="path">' + path.html() + '</span> $ ' + data.command + output);
                    path.html(data.path);
                    $('#form-terminal-command').val('');
                    updateCommandInput();

                    // if scrollbar was at the end, autoscroll the new messages
                    if ((scrollHeight - scrollOffset) <= (scrollPosition + scrollOutputHeight)) {
                        resultContainer.ready(function() {
                            resultContainer.scrollTop(resultContainer[0].scrollHeight);
                        });
                    }
                }
            });

            return false;
        }

        function updateCommandInput() {
            var width = $('#form-terminal').width() - $('#form-terminal pre.bash').width() - 25;
            $('#form-terminal-command').css('width', width + 'px');
        }

        return {
            init: init,
            focus: focus,
            submit: submitForm
        };

    }();

    return {
        terminal: terminal
    };

}();
