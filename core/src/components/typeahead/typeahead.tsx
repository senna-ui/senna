import { Component, ComponentInterface, Host, h, Prop, EventEmitter, Event, State, Watch } from "@stencil/core";
import { OptionSelectedEvent, TypeaheadOption } from "../../interface";


function getHighlightedText(text: string, highlight: string) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return <span> {parts.map((part, i) =>
    <span key={i} class={part.toLowerCase() === highlight.toLowerCase() ? 'highlight' : ''}>
      {part}
    </span>)
  } </span>;
}

@Component({
  tag: "sen-typeahead",
  styleUrl: "typeahead.scss",
  shadow: true,
})
export class Typeahead implements ComponentInterface {
  /**
   * Options to display in typeahead
   */
  @Prop() options: TypeaheadOption[] = [];

  /**
   * The value of the input.
   */
  @Prop({ mutable: true, reflect: true }) value: string = "";

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() senInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when input is changed
   */
  @Event() senChange!: EventEmitter<OptionSelectedEvent>;

  @State() selectedIndex: number = -1;
  @State() matchedOptions: TypeaheadOption[] = [];
  @State() open: boolean = false;

  @Watch('value')
  watchHandler() {
    this.matchedOptions = !Boolean(this.value) ? [] : this.options.filter(o => o.label.toLowerCase().includes(this.value.toLowerCase()))
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || "";
      this.open = true
    } else {
      this.open = false
    }
    this.senInput.emit(ev as KeyboardEvent);
  };

  private onSelectOption = (option: TypeaheadOption) => {
    this.senChange.emit({ option })
    this.value = option.label
    this.open = false
  }

  private handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === 'ArrowDown') {
      ev.preventDefault()
      this.selectedIndex = Math.min(this.matchedOptions.length - 1, this.selectedIndex + 1);
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault()
      this.selectedIndex = Math.max(-1, this.selectedIndex - 1);
    }
  }

  private handleKeyboardSelect = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter' && this.selectedIndex > -1) {
      ev.preventDefault()
      const option = this.matchedOptions[this.selectedIndex]
      this.onSelectOption(option)
    }
  }

  private handleFocus = () => {
    this.selectedIndex = -1
  }

  render() {
    return (
      <Host>
        <div class="typeahead" onKeyDown={this.handleKeyboardSelect}>
          <sen-input onFocus={this.handleFocus} onKeyDown={this.handleKeyDown} value={this.value} onSenInput={this.onInput} />
          {this.open && <ul class="typeahead__options">
            {this.matchedOptions.map((option, index) => (
              <li class={index === this.selectedIndex ? 'selected' : ''}>
                <a onClick={() => this.onSelectOption(option)}>
                  {getHighlightedText(option.label, this.value)}
                </a>
              </li>
            ))}
          </ul>
          }
        </div>
      </Host>
    );
  }
}
