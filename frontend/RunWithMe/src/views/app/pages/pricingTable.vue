<template>
  <div class="main-content">
    <breadcumb :page="'Pricing Table'" :folder="'App'" />

    <b-row>
      <b-col md="12" xl="12" lg="12">
        <b-card header-bg-variant="transparent" class="mb-30" header="Default Style">
          <div class="ul-pricing__table-list">
            <b-row>
              <b-col md="12" lg="4" xl="4">
                <div class="ul-pricing__table-1">
                  <div class="ul-pricing__image card-icon-bg-primary">
                    <i class="i-Bicycle1"></i>
                  </div>
                  <div class="ul-pricing__title">
                    <h2 class="heading text-primary">Basic</h2>
                  </div>
                  <div class="ul-pricing__text text-mute">5gb</div>
                  <div class="ul-pricing__main-number">
                    <h3 class="heading display-3 text-primary t-font-boldest">$10</h3>
                  </div>
                  <div class="ul-pricing__list">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
                  <button type="button" class="btn btn-lg btn-default btn-rounded m-1">Purchase</button>
                </div>
              </b-col>
              <b-col md="12" lg="4" xl="4">
                <div class="ul-pricing__table-1">
                  <div class="ul-pricing__image card-icon-bg-primary">
                    <i class="i-Scooter"></i>
                  </div>
                  <div class="ul-pricing__title">
                    <h2 class="heading text-primary">Standard</h2>
                  </div>
                  <div class="ul-pricing__text text-mute">15gb</div>
                  <div class="ul-pricing__main-number">
                    <h3 class="heading display-3 text-primary t-font-boldest">$250</h3>
                  </div>
                  <div class="ul-pricing__list">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
                  <button type="button" class="btn btn-lg btn-default btn-rounded m-1">Purchase</button>
                </div>
              </b-col>
              <b-col md="12" lg="4" xl="4">
                <div class="ul-pricing__table-1 border-right-0">
                  <div class="ul-pricing__image card-icon-bg-primary">
                    <i class="i-Car-2"></i>
                  </div>
                  <div class="ul-pricing__title">
                    <h2 class="heading text-primary">Premium</h2>
                  </div>
                  <div class="ul-pricing__text text-mute">35gb</div>
                  <div class="ul-pricing__main-number">
                    <h3 class="heading display-3 text-primary t-font-boldest">$500</h3>
                  </div>
                  <div class="ul-pricing__list">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  </div>
                  <button type="button" class="btn btn-lg btn-default btn-rounded m-1">Purchase</button>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>

      <b-col md="12" xl="12" lg="12">
        <b-card header-bg-variant="transparent" class="mb-30" header="Full Width">
          <b-row>
            <b-col lg="3" xl="3">
              <div class="ul-pricing__table-1 mb-4">
                <div class="ul-pricing__image card-icon-bg-primary">
                  <i class="i-Gift-Box"></i>
                </div>
                <div class="ul-pricing__title">
                  <h2 class="heading text-primary">Free</h2>
                </div>
                <div class="ul-pricing__text text-mute">1gb</div>
                <div class="ul-pricing__main-number">
                  <h3 class="heading display-3 text-primary t-font-boldest">$0</h3>
                </div>
                <div class="ul-pricing__list">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <button type="button" class="btn btn-lg btn-primary btn-rounded m-1">Purchase</button>
              </div>
            </b-col>
            <b-col lg="3" xl="3">
              <div class="ul-pricing__table-1">
                <div class="ul-pricing__image card-icon-bg-primary">
                  <i class="i-Bicycle1"></i>
                </div>
                <div class="ul-pricing__title">
                  <h2 class="heading text-primary">Basic</h2>
                </div>
                <div class="ul-pricing__text text-mute">5gb</div>
                <div class="ul-pricing__main-number">
                  <h3 class="heading display-3 text-primary t-font-boldest">$10</h3>
                </div>
                <div class="ul-pricing__list">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <button type="button" class="btn btn-lg btn-primary btn-rounded m-1">Purchase</button>
              </div>
            </b-col>
            <b-col lg="3" xl="3">
              <div class="ul-pricing__table-1">
                <div class="ul-pricing__image card-icon-bg-primary">
                  <i class="i-Scooter"></i>
                </div>
                <div class="ul-pricing__title">
                  <h2 class="heading text-primary">Standard</h2>
                </div>
                <div class="ul-pricing__text text-mute">15gb</div>
                <div class="ul-pricing__main-number">
                  <h3 class="heading display-3 text-primary t-font-boldest">$250</h3>
                </div>
                <div class="ul-pricing__list">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <button type="button" class="btn btn-lg btn-primary btn-rounded m-1">Purchase</button>
              </div>
            </b-col>
            <b-col lg="3" xl="3">
              <div class="ul-pricing__table-1 border-right-0">
                <div class="ul-pricing__image card-icon-bg-primary">
                  <i class="i-Car-2"></i>
                </div>
                <div class="ul-pricing__title">
                  <h2 class="heading text-primary">Premium</h2>
                </div>
                <div class="ul-pricing__text text-mute">35gb</div>
                <div class="ul-pricing__main-number">
                  <h3 class="heading display-3 text-primary t-font-boldest">$500</h3>
                </div>
                <div class="ul-pricing__list">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <button type="button" class="btn btn-lg btn-primary btn-rounded m-1">Purchase</button>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="12" xl="12" lg="12">
        <b-card header-bg-variant="transparent" class="mb-30" header="Full Width with Hover">
          <b-row>
            <b-col lg="3" xl="3" class="m-0 p-0">
              <div class="ul-pricing__table-2">
                <div class="ul-pricing__header">
                  <div class="ul-pricing__image text-primary m-0">
                    <i class="i-Car-2"></i>
                  </div>
                  <div class="ul-pricing__main-number m-0">
                    <h1 class="heading text-primary t-font-boldest">$0.00</h1>
                  </div>
                  <div class="ul-pricing__month">
                    <small class="text-purple-100">per month</small>
                  </div>
                </div>
                <div class="ul-pricing__title">
                  <h2 class="heading text-primary">Free</h2>
                </div>
                <div class="ul-pricing__table-listing mb-4">
                  <ul>
                    <li class="t-font-bolder">Disk Space 250gb</li>
                    <li class="t-font-bolder">Bandwidth 250gb</li>
                    <li class="t-font-bolder">Databases</li>
                    <li class="text-mute">E-mail accounts NO</li>
                    <li class="text-mute">24h support NO</li>
                    <li class="text-mute">E-mail support NO</li>
                  </ul>
                </div>

                <button type="button" class="btn btn-lg btn-primary btn-rounded m-1">Purchase</button>
              </div>
            </b-col>

            <b-col lg="3" xl="3" class="m-0 p-0">
              <div class="ul-pricing__table-2">
                <div class="ul-pricing__header">
                  <div class="ul-pricing__image text-warning m-0">
                    <i class="i-Bicycle1"></i>
                  </div>
                  <div class="ul-pricing__main-number m-0">
                    <h1 class="heading text-warning t-font-boldest">$10</h1>
                  </div>
                  <div class="ul-pricing__month">
                    <small class="text-purple-100">per month</small>
                  </div>
                </div>
                <div class="ul-pricing__title">
                  <h2 class="heading text-warning">Basic</h2>
                </div>
                <div class="ul-pricing__table-listing mb-4">
                  <ul>
                    <li class="t-font-bolder">Disk Space 250gb</li>
                    <li class="t-font-bolder">Bandwidth 250gb</li>
                    <li class="t-font-bolder">Databases</li>
                    <li class="text-mute">E-mail accounts NO</li>
                    <li class="text-mute">24h support NO</li>
                    <li class="text-mute">E-mail support NO</li>
                  </ul>
                </div>

                <button type="button" class="btn btn-lg btn-warning btn-rounded m-1">Purchase</button>
              </div>
            </b-col>

            <b-col lg="3" xl="3" class="m-0 p-0">
              <div class="ul-pricing__table-2">
                <div class="ul-pricing__header">
                  <div class="ul-pricing__image text-danger m-0">
                    <i class="i-Scooter"></i>
                  </div>
                  <div class="ul-pricing__main-number m-0">
                    <h1 class="heading text-danger t-font-boldest">$250</h1>
                  </div>
                  <div class="ul-pricing__month">
                    <small class="text-purple-100">per month</small>
                  </div>
                </div>
                <div class="ul-pricing__title">
                  <h2 class="heading text-danger">Standard</h2>
                </div>
                <div class="ul-pricing__table-listing mb-4">
                  <ul>
                    <li class="t-font-bolder">Disk Space 250gb</li>
                    <li class="t-font-bolder">Bandwidth 250gb</li>
                    <li class="t-font-bolder">Databases</li>
                    <li class>
                      E-mail accounts
                      <span class="t-font-bold text-danger">Yes</span>
                    </li>
                    <li class>
                      24h support
                      <span class="t-font-bold text-danger">Yes</span>
                    </li>
                    <li class="text-mute">E-mail support NO</li>
                  </ul>
                </div>

                <button type="button" class="btn btn-lg btn-danger btn-rounded m-1">Purchase</button>
              </div>
            </b-col>

            <b-col lg="3" xl="3" class="m-0 p-0">
              <div class="ul-pricing__table-2 border-right-0">
                <div class="ul-pricing__header">
                  <div class="ul-pricing__image text-success m-0">
                    <i class="i-Helicopter"></i>
                  </div>
                  <div class="ul-pricing__main-number m-0">
                    <h1 class="heading text-success t-font-boldest">$500</h1>
                  </div>
                  <div class="ul-pricing__month">
                    <small class="text-purple-100">per month</small>
                  </div>
                </div>
                <div class="ul-pricing__title">
                  <h2 class="heading text-success">Premium</h2>
                </div>
                <div class="ul-pricing__table-listing mb-4">
                  <ul>
                    <li class="t-font-bolder">Disk Space 250gb</li>
                    <li class="t-font-bolder">Bandwidth 250gb</li>
                    <li class="t-font-bolder">Databases</li>
                    <li class="text-mute">E-mail accounts NO</li>
                    <li class>
                      24h support
                      <span class="text-success">Yes</span>
                    </li>
                    <li class="text-mute">E-mail support NO</li>
                  </ul>
                </div>

                <button type="button" class="btn btn-lg btn-success btn-rounded m-1">Purchase</button>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>