<template>
  <div class="main-content">
    <breadcumb :page="'Form Layouts'" :folder="'Forms'" />
    <b-row>
      <b-col md="12">
        <h4>Horizontal Layout</h4>

        <b-card class="mb-30">
          <b-row>
            <b-col md="5">
              <b-form-input
                
                type="text"
                required
                placeholder="Enter your username"
              ></b-form-input>
            </b-col>

            <b-col md="5" class="mt-3 mt-md-0">
              <b-form-input
                
                type="text"
                required
                placeholder="Enter your password"
              ></b-form-input>
            </b-col>

            <b-col md="2" class="mt-3 mt-md-0">
              <b-button block variant="primary">Sign In</b-button>
            </b-col>
          </b-row>
        </b-card>
        <div class="border-top mb-30"></div>

        <div class="row">
          <b-col md="6">
            <h4>Verticle Layout</h4>

            <b-card class="mb-30">
              <div class="d-flex flex-column">
                <b-form-group>
                  <b-form-input
                    type="text"
                    placeholder="Enter your username"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="password"
                    placeholder="Enter your password"
                  ></b-form-input>
                </b-form-group>
                <b-button block variant="primary">
                  Sign In
                </b-button>
              </div>
            </b-card>
          </b-col>
        </div>
        <div class="border-top mb-30"></div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <h4>Left Label Alignment</h4>
        <p>A form control layout using row with left label alignment.</p>

        <b-card class="mb-30">
          <b-form>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label"
                >Email</label
              >
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label"
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>

            <fieldset class="form-group">
              <div class="row">
                <div class="col-form-label col-sm-2 pt-0">Radios</div>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      checked=""
                    />
                    <label class="form-check-label" for="gridRadios1">
                      First radio
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="gridRadios2">
                      Second radio
                    </label>
                  </div>
                  <div class="form-check disabled">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="option3"
                      disabled=""
                    />
                    <label class="form-check-label" for="gridRadios3">
                      Third disabled radio
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="form-group row">
              <div class="col-sm-2">Checkbox</div>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label class="form-check-label" for="gridCheck1">
                    Example checkbox
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <div class="border-top mb-30"></div>
    <!-- form-inside-dropdown -->
    <b-row>
      <b-col md="6">
        <h4>Form Inside Dropdown</h4>
        <p>A form group layout inside dropdown</p>

        <b-dropdown
          id="dropdown-header"
          variant="primary"
          text="Dropdown with header"
          class="m-2"
        >
          <b-dropdown-header id="dropdown-header-label">
            <div class="card-title mb-1">Please Sign In First</div>
            <p class="">Lorem ipsum dolor sit amet.</p>

            <div class="d-flex flex-column">
              <b-form>
                <b-form-group>
                  <b-form-input type="text" placeholder="Enter your username">
                  </b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="password"
                    placeholder="Enter your password"
                  >
                  </b-form-input>
                </b-form-group>
                <b-button block variant="primary">
                  Sign In
                </b-button>
              </b-form>
            </div>
          </b-dropdown-header>
        </b-dropdown>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Layouts"
  }
};
</script>

