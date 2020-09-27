package com.java.proj.test;

import static org.junit.Assert.assertArrayEquals;

import org.junit.Test;

import com.java.proj.DataConverter;

public class DataConverterTest {

	@Test
	public void currentRow() {
		String[] expected = {"0","1","0"};
		assertArrayEquals(expected, DataConverter.getCurrentRow(3, 1));
	}
}
