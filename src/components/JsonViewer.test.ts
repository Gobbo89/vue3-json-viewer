// @vitest-environment jsdom
import { mount, flushPromises } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import JsonViewer from "./JsonViewer.vue";

const hostileKey = '<img src=x onerror="alert(1)">';
const hostileValue = '<svg onload="alert(2)"></svg> & text';
const data = { [hostileKey]: hostileValue, count: -1.25e-7, enabled: true, empty: null };

afterEach(() => {
  vi.restoreAllMocks();
});

describe("JsonViewer rendering", () => {
  it("renders hostile keys and values literally in text mode with syntax highlighting", () => {
    const wrapper = mount(JsonViewer, { props: { data, defaultMode: "text", showLineNumbers: true } });
    const display = wrapper.get(".json-display code");

    expect(display.element.textContent).toBe(JSON.stringify(data, null, 2));
    expect(display.find(".json-key").text()).toBe(JSON.stringify(hostileKey));
    expect(display.find(".json-string").text()).toBe(JSON.stringify(hostileValue));
    expect(display.find(".json-number").text()).toBe("-1.25e-7");
    expect(display.find(".json-boolean").text()).toBe("true");
    expect(display.find(".json-null").text()).toBe("null");
    expect(display.find("img, svg").exists()).toBe(false);
    expect(wrapper.findAll(".line-number")).toHaveLength(JSON.stringify(data, null, 2).split("\n").length);
  });

  it("renders hostile keys and values literally in tree mode and after switching modes", async () => {
    const wrapper = mount(JsonViewer, { props: { data, defaultMode: "tree" } });

    expect(wrapper.findAll(".node-key")[1].text()).toBe(`"${hostileKey}"`);
    expect(wrapper.get(".value-display").text()).toBe(`"${hostileValue}"`);
    expect(wrapper.find("img[src='x'], svg[onload]").exists()).toBe(false);

    await wrapper.findAll(".mode-btn")[1].trigger("click");
    expect(wrapper.get(".json-display code").element.textContent).toBe(JSON.stringify(data, null, 2));
    expect(wrapper.find("img[src='x'], svg[onload]").exists()).toBe(false);
  });

  it("copies the original JSON text in both modes", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    const wrapper = mount(JsonViewer, { props: { data, defaultMode: "tree" } });

    await wrapper.get(".copy-btn").trigger("click");
    await flushPromises();
    await wrapper.findAll(".mode-btn")[1].trigger("click");
    await wrapper.get(".copy-btn").trigger("click");
    await flushPromises();

    expect(writeText).toHaveBeenCalledTimes(2);
    expect(writeText).toHaveBeenNthCalledWith(1, JSON.stringify(data, null, 2));
    expect(writeText).toHaveBeenNthCalledWith(2, JSON.stringify(data, null, 2));
  });
});
