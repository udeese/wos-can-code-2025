# Demo: Clean a Library Checkouts Dataset

This demo mirrors the learning targets of the **Clean a Real Dataset** assignment, but uses a small **library checkouts** dataset.
We will practice the full ETL workflow: extract, transform, and load.

---

## Goal

Create a Python script named `pipeline.py` that cleans a messy library checkouts CSV file and produces a focused report by applying the following:

- **Structural Cleaning:** rename columns to `snake_case`, strip whitespace, standardize string case.
- **Data Quality:** drop duplicates, drop missing rows, fill missing values.
- **Analysis & Load:** filter, sort, and export a clean CSV report.

---

## The Dataset

Download the starter dataset: [demo_library.csv](./demo-library.csv)

---

## Steps

### 1. Extract

- Use `pandas.read_csv()` to load `demo_library.csv`.

### 2. Transform

- Rename columns to snake_case (e.g., `member_email`, `book_title`, `fee_usd`, `waived_fee`).
- Normalize `branch` and `status` by stripping whitespace and lowercasing.
- Drop duplicate records (e.g., repeated checkouts).
- Drop rows where `fee_usd` is missing.
- Fill missing values in `waived_fee` with `0.0`.

### 3. Load

- Filter for rows where:
  - `status == "returned"`
  - `branch == "east"`
  - `fee_usd > 0`
- Sort results by `fee_usd` descending.
- Export to `report.csv`.

---

## Deliverable

By the end of this demo you will have:

- A cleaned CSV file (`report.csv`) with only **returned East branch checkouts that had fees**.
- A Python script (`pipeline.py`) showing the full ETL workflow.
